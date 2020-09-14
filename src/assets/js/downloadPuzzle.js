import JSZip from 'src/assets/js/jszip.min.js';
import saveAs from 'src/assets/js/FileSaver.js';
export { downloadPuzzle3D, downloadPuzzle2D };

let getPuzzleDataURL = 'http://localhost:3200/api/puzzles/getPuzzleByID/';
let piecesJSONObject, pieces, base64Image;
let desiredFile;

function downloadPuzzle3D()
{
	desiredFile = '3D';
	puzzleID = localStorage.getItem('solvingPuzzleID');
	getPuzzleData(puzzleID);
}

function downloadPuzzle2D()
{
	desiredFile = '2D';
	puzzleID = localStorage.getItem('solvingPuzzleID');
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
	let img = zip.folder("images");
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
				z: 5
			};

			bottomLeft = {
				x: currentPiece[vertexIndex],
				y: currentPiece[vertexIndex+1],
				z: 0
			};

			topRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: 5
			};

			bottomRight = {
				x: currentPiece[vertexIndex+2],
				y: currentPiece[vertexIndex+3],
				z: 0
			};

			stlFile = addVertexToFile(bottomLeft, bottomRight, topRight, stlFile);
			stlFile = addVertexToFile(topRight, topLeft, bottomLeft, stlFile);
		}
		stlFile += "endsolid puzzle";
		zip.file("piece_number_" + pieceIndex + ".stl", stlFile);
	}

	img.file("puzzle.jpeg", base64Image, {base64: true});

	zip.generateAsync({type:"blob"}).then(function(blob){
		saveAs(blob, "puzzle.zip");
	}, function(error){
		console.log(error);
	});
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
	let img = zip.folder("images");
	img.file("puzzle.jpeg", base64Image, {base64: true});

	zip.generateAsync({type:"blob"}).then(function(blob){
		saveAs(blob, "puzzle.zip");
	}, function(error){
		console.log(error);
	});
}