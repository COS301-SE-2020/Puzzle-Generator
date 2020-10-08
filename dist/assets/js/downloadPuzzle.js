import JSZip from 'src/assets/js/jszip.min.js';
import saveAs from 'src/assets/js/FileSaver.js';
export { downloadPuzzle3D, downloadPuzzle2D };

let getPuzzleDataURL = 'https://prometheuspuzzles.herokuapp.com/api/puzzles/getPuzzleByID/';
let piecesJSONObject, pieces, base64Image;
let desiredFile;

function downloadPuzzle3D(puzzleID)
{
	desiredFile = '3D';
	//puzzleID = localStorage.getItem('solvingPuzzleID');
	getPuzzleData(puzzleID);
}

function downloadPuzzle2D(puzzleID)
{
	desiredFile = '2D';
	//puzzleID = localStorage.getItem('solvingPuzzleID');
	getPuzzleData(puzzleID);
}

function getPuzzleData(puzzleID)
{
	let url = getPuzzleDataURL + puzzleID;
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data, status){
			piecesJSONObject = JSON.parse(data[0].puzzleObject);
			pieces = piecesJSONObject.pieces;

			base64Image = data[0].image;
			base64Image = base64Image.split(",");
			base64Image = base64Image[1];
			if(desiredFile == '3D')
				generateSTLFiles();
			else
				generateImageFile();
		},
		error: function(data, status){
			console.log(status);
			console.log(data);
		}
	});
}

function generateSTLFiles()
{
	let zip = new JSZip();
	let imgFolder = zip.folder("images");
	let tileFolder = zip.folder("tile puzzle");
	let cuboidFolder = zip.folder("cuboid puzzle");
	createTilePrintableFiles(tileFolder, 0, 5);
  let depths;
	if(piecesJSONObject.depths === undefined)
	{
    
    depths = [];
		for(let i = 0; i < pieces.length; i++)
			depths[i] = getDepth(Math.floor(Math.random() * 8) + 1);
	}
	else
	{
		depths = piecesJSONObject.depths;
		for(let i = 0; i < pieces.length; i++)
			depths[i] = getDepth(depths[i]);
	}

	createCuboidPrintableFiles(cuboidFolder, depths);

	imgFolder.file("puzzle.jpeg", base64Image, {base64: true});
	zip.generateAsync({type:"blob"}).then(function(blob){
		saveAs(blob, "puzzle.zip");
	}, function(error){
		console.log(error);
	});
}

function createCuboidPrintableFiles(folder, depthsArray)
{
	let currentPiece;
	let topRight, topLeft, bottomRight, bottomLeft;
	let nextTopRight, nextTopLeft, nextBottomRight, nextBottomLeft;
	let stlFileFrontFace, stlFileBackFace;
	for(let pieceIndex = 0; pieceIndex < pieces.length; pieceIndex++)
	{
		stlFileFrontFace = 'solid piece_number_' + pieceIndex + '\n';
		stlFileBackFace = 'solid piece_number_' + pieceIndex + '\n';
		currentPiece = pieces[pieceIndex];
		for(let vertexIndex = 0; vertexIndex < currentPiece.length; vertexIndex+=4)
		{
			topLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: depthsArray[pieceIndex]
			};

			bottomLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: 0
			};

			topRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: depthsArray[pieceIndex]
			};

			bottomRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: 0
			};

			if(vertexIndex+4 < currentPiece.length)
			{
				nextTopLeft = {
					x: currentPiece[vertexIndex+4],
					y: currentPiece[vertexIndex+4+1],
					z: depthsArray[pieceIndex]
				};

				nextBottomLeft = {
					x: currentPiece[vertexIndex+4],
					y: currentPiece[vertexIndex+4+1],
					z: 0
				};

				nextTopRight = {
					x: currentPiece[vertexIndex+4+2],
					y: currentPiece[vertexIndex+4+3],
					z: depthsArray[pieceIndex]
				};

				nextBottomRight = {
					x: currentPiece[vertexIndex+4+2],
					y: currentPiece[vertexIndex+4+3],
					z: 0
				};

				stlFileFrontFace = addVertexToFile(topLeft, topRight, nextTopRight, stlFileFrontFace);
				stlFileFrontFace = addVertexToFile(nextTopRight, nextTopLeft, topLeft, stlFileFrontFace);

				stlFileFrontFace = addVertexToFile(bottomRight, nextBottomRight, nextTopRight, stlFileFrontFace);
				stlFileFrontFace = addVertexToFile(nextTopRight, topRight, bottomRight, stlFileFrontFace);

				stlFileFrontFace = addVertexToFile(bottomLeft, nextBottomLeft, nextTopLeft, stlFileFrontFace);
				stlFileFrontFace = addVertexToFile(nextTopLeft, topLeft, bottomLeft, stlFileFrontFace);
			}

			stlFileFrontFace = addVertexToFile(bottomLeft, bottomRight, topRight, stlFileFrontFace);
			stlFileFrontFace = addVertexToFile(topRight, topLeft, bottomLeft, stlFileFrontFace);


			topLeft.z = 500;
			bottomLeft.z = depthsArray[pieceIndex];
			topRight.z = 500;
			bottomRight.z = depthsArray[pieceIndex];

			if(vertexIndex+4 < currentPiece.length)
			{
				nextTopLeft.z = 500;
				nextBottomLeft.z = depthsArray[pieceIndex];
				nextTopRight.z = 500;
				nextBottomRight.z = depthsArray[pieceIndex];

				stlFileBackFace = addVertexToFile(topLeft, topRight, nextTopRight, stlFileBackFace);
				stlFileBackFace = addVertexToFile(nextTopRight, nextTopLeft, topLeft, stlFileBackFace);

				stlFileBackFace = addVertexToFile(bottomRight, nextBottomRight, nextTopRight, stlFileBackFace);
				stlFileBackFace = addVertexToFile(nextTopRight, topRight, bottomRight, stlFileBackFace);

				stlFileBackFace = addVertexToFile(bottomLeft, nextBottomLeft, nextTopLeft, stlFileBackFace);
				stlFileBackFace = addVertexToFile(nextTopLeft, topLeft, bottomLeft, stlFileBackFace);
			}

			stlFileBackFace = addVertexToFile(bottomLeft, bottomRight, topRight, stlFileBackFace);
			stlFileBackFace = addVertexToFile(topRight, topLeft, bottomLeft, stlFileBackFace);
		}

		stlFileFrontFace += "endsolid puzzle";
		stlFileBackFace += "endsolid puzzle";
		folder.file("piece_number_" + pieceIndex + "(front_face).stl", stlFileFrontFace);
		folder.file("piece_number_" + pieceIndex + "(back_face).stl", stlFileBackFace);
	}
}

function createTilePrintableFiles(folder, zPositionBottom, zPositionTop, optionalSuffix)
{
	if(optionalSuffix == undefined)
		optionalSuffix = '';

	let currentPiece;
	let topRight, topLeft, bottomRight, bottomLeft;
	let stlFile;

	for(let pieceIndex = 0; pieceIndex < pieces.length; pieceIndex++)
	{
		stlFile = 'solid piece_number_' + pieceIndex + '\n';
		currentPiece = pieces[pieceIndex];
		for(let vertexIndex = 0; vertexIndex < currentPiece.length; vertexIndex+=4)
		{
			topLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: zPositionTop
			};

			bottomLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: zPositionBottom
			};

			topRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: zPositionTop
			};

			bottomRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: zPositionBottom
			};

			stlFile = addVertexToFile(bottomLeft, bottomRight, topRight, stlFile);
			stlFile = addVertexToFile(topRight, topLeft, bottomLeft, stlFile);
		}
		stlFile += "endsolid puzzle";
		folder.file("piece_number_" + pieceIndex + optionalSuffix + ".stl", stlFile);
	}
}

function addVertexToFile(vertexA, vertexB, vertexC, stlFile)
{
	stlFile += "facet normal 0 0 0\n";
	stlFile += "outer loop\n";
	stlFile += "vertex " + vertexA.x + " " + vertexA.y + " " + vertexA.z + "\n";
	stlFile += "vertex " + vertexB.x + " " + vertexB.y + " " + vertexB.z + "\n";
	stlFile += "vertex " + vertexC.x + " " + vertexC.y + " " + vertexC.z + "\n";
	stlFile += "endloop\n";
	stlFile += "endfacet\n";

	return stlFile;
}

function generateImageFile()
{
	let zip = new JSZip();
	let imgFolder = zip.folder("images");
	imgFolder.file("puzzle.jpeg", base64Image, {base64: true});

	zip.generateAsync({type:"blob"}).then(function(blob){
		saveAs(blob, "puzzle.zip");
	}, function(error){
		console.log(error);
	});
}

function getDepth(nth)
{
	return ((nth/10) * 500);
}
