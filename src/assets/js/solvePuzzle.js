import Konva from 'konva';
import JSZip from 'src/assets/js/jszip.min.js';
import saveAs from 'src/assets/js/FileSaver.js';
export { initializeDataSolve };

let getPuzzleDataURL = 'http://localhost:3200/api/puzzles/getPuzzleByID/';
let saveSolveAttemptURL = 'http://localhost:3200/api/puzzles/newSolveAttempt';
let piecesJSONObject, pieces, colors;
let correctPositions, pieceInCorrectPosition;
let defaultPalette = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite', 'Red', 'Green'];
let shadesOfBluePalette = ['DarkBlue', 'DeepSkyBlue', 'MediumBlue', 'DodgerBlue', 'MidnightBlue', 'RoyalBlue', 'DarkSlateBlue', 'CornflowerBlue', 'SkyBlue', 'PowderBlue'];
let canvas, stage, layer, outline, board, puzzleID;
let width = 1000, height = 500;
let startTime, puzzleSolved;

// window.onload = function(){
// 	initializeDataSolve();
// }

function initializeDataSolve()
{
	correctPositions = [];
	pieceInCorrectPosition = [];
	puzzleID = localStorage.getItem('solvingPuzzleID');
	puzzleSolved = false;
	getPuzzleData(puzzleID);

	canvas = document.getElementById('solverContainer');
	stage = new Konva.Stage({
		container: 'solverContainer',
		width: width,
		height: height
	});

	board = new Konva.Rect({
		x: (width/4),
		y: 0,
		width: width/2,
		height: height,
		stroke: 'black',
		fill: 'white',
		strokeWidth: 1
	});

	outline = new Konva.Rect({
		x: 0,
		y: 0,
		width: width,
		height: height,
		stroke: 'grey',
		fill: '#dcdcdc',
		strokeWidth: 1
	});

	layer = new Konva.Layer();
	stage.add(layer);
	layer.add(outline);

	document.getElementById('closeSolverDialogButton').addEventListener('mousedown', function(){
		if(!puzzleSolved)
			saveSolveAttempt(false, puzzleID, startTime);
	});
}

function saveSolveAttempt(solved, solvePuzzleID, solveStartTime)
{
	let token = document.getElementById('tokenLabel').innerHTML;
	let timeTaken = performance.now();
	timeTaken = (timeTaken - solveStartTime).toFixed(0);
	timeTaken = Math.floor(timeTaken / 1000);

	let jsonData = {
		token: token,
		puzzleID: solvePuzzleID,
		attemptDuration: timeTaken,
		solved: solved
	};

	$.ajax({
		type: 'POST',
		url: saveSolveAttemptURL,
		headers: {
			'Access-Control-Allow-Origin' : '*'
		},
		contentType: 'application/json',
		data: JSON.stringify(jsonData),
		dataType: 'json',
		success: function(data, status){
			console.log('success!');
		},
		error: function(data, status){
			
		}
	});
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
			colors = piecesJSONObject.colors;
			if(colors === undefined)
				colors = defaultPalette;
			// generateSTLFile();
			generatePieces();
		},
		error: function(data, status){
			console.log(status);
			console.log(data);
		}
	});
}

function generatePieces()
{
	for(let pieceIndex = 0; pieceIndex < pieces.length; pieceIndex++)
	{
		let selectedPiece = pieces[pieceIndex];
		let offsetX = getRandomOffsetX(selectedPiece, 0);
		// console.log(offsetX);
		let offsetY = getRandomOffset(getMin(selectedPiece, 'y'), ( height/2 ));
		let minY = getMin(selectedPiece, 'y');

		correctPositions.push({x: selectedPiece[0], y: selectedPiece[1]});
		pieceInCorrectPosition.push(false);

		for(let i = 0; i < selectedPiece.length; i+=2)
		{
			if( (pieceIndex+1) % 2 == 0)
				selectedPiece[i] += 800;
			selectedPiece[i] -= offsetX;
			// selectedPiece[i+1] += minY - ((pieceIndex % 5) * 100);
		}
		
		let group = new Konva.Group();

		let hitBox = new Konva.Rect({
			x: selectedPiece[0],
			y: selectedPiece[1],
			width: 5,
			height: 5	
		});



		let piece = new Konva.Line({
			points: selectedPiece,
			stroke: colors[pieceIndex % colors.length],
			strokeWidth: 2,
			perfectDrawEnabled: false,
		});

		piece.on('mouseover', function (){
			document.body.style.cursor = 'pointer';
			// this.scale({x: 1, y: 1});
			group.moveToTop();
			layer.draw();
		});

		piece.on('mouseout', function() {
			document.body.style.cursor = 'default';
			// this.scale({x: 0.5, y: 0.5});
			layer.draw();
		});

		group.on('dragend', function(){
			let hitBox = this.getChildren()[1];
			let hitBoxCoordinates = hitBox.absolutePosition();
			hitBoxCoordinates.x -= 250;

			if(checkPosition(hitBoxCoordinates, correctPositions[pieceIndex]))
			{
				snapPieceIntoPlace(hitBoxCoordinates, correctPositions[pieceIndex], this);
				group.draggable(false);
				console.log('nailed it!!');
				pieceInCorrectPosition[pieceIndex] = true;
				checkIfPuzzleSolved();
			}
			else
			{
				console.log('you are off bud!');
				console.log('The correct x: ' + correctPositions[pieceIndex].x + ' - The correct y: ' + correctPositions[pieceIndex].y);
				console.log('The current x: ' + hitBoxCoordinates.x + ' - The current y: ' + hitBoxCoordinates.y);
				pieceInCorrectPosition[pieceIndex] = false;
			}
		});


		// piece.scale({x: 0.75, y: 0.75});
		group.add(piece);
		group.add(hitBox);
		group.draggable(true);
		layer.add(group);
	}

	layer.add(board);
	layer.draw();
	startTime = performance.now();
}

function getMax(pointsArray, coordinate)
{
	let step;
	if(coordinate == 'x')
		step = 0;
	else
		step = 1;

	let max = 0;
	for(let i = 0; i < pointsArray.length; i+=2)
	{
		if(pointsArray[i+step] > max)
			max = pointsArray[i+step];
	}

	return max;
}

function getMin(pointsArray, coordinate)
{
	let step;
	if(coordinate == 'x')
		step = 0;
	else
		step = 1;

	let min = pointsArray[step];
	for(let i = 0; i < pointsArray.length; i+=2)
	{
		if(pointsArray[i+step] < min)
			min = pointsArray[i+step];
	}

	return min;
}

function getRandomOffset(lowerBound, upperBound)
{
	let returnValue = 0;
	// while( returnValue <= lowerBound )
	{
		returnValue = Math.floor((Math.random() * upperBound) + 1);
	}

	return returnValue;
}

function getRandomOffsetX(pixelArray, min)
{
	let minX = getMin(pixelArray, 'x');
	let maxX = getMax(pixelArray, 'x');

	return minX;

}

function checkPosition(coords1, coords2)
{
	let xDifference = coords1.x - coords2.x;
	let yDifference = coords1.y - coords2.y;
	if(xDifference < 0)
		xDifference *= -1;
	if(yDifference < 0)
		yDifference *= -1;

	if(xDifference <= 15 && yDifference <= 15)
		return true;
	else
		return false;
}

function checkIfPuzzleSolved()
{
	for(let pieceIndex = 0; pieceIndex < pieceInCorrectPosition.length; pieceIndex++)
	{
		if(!pieceInCorrectPosition[pieceIndex])
			return false;
	}

	alert('Puzzle Solved!');
	puzzleSolved = true;
	saveSolveAttempt(puzzleSolved, puzzleID, startTime);
}

function snapPieceIntoPlace(currentCoords, targetCoords, piece)
{
	let xDifference = currentCoords.x - targetCoords.x;
	let yDifference = currentCoords.y - targetCoords.y;
	piece.x(piece.x() - xDifference);
	piece.y(piece.y() - yDifference);
	layer.draw();
}

function generateSTLFile()
{
	let zip = new JSZip();
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

	console.log(zip);

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