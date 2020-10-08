import Konva from 'konva';
import JSZip from 'src/assets/js/jszip.min.js';
import saveAs from 'src/assets/js/FileSaver.js';
export { initializeDataSolve, getPieceInCorrectPositionArray };

let getPuzzleDataURL = 'https://prometheuspuzzles.herokuapp.com/api/puzzles/getPuzzleByID/';
let saveSolveAttemptURL = 'https://prometheuspuzzles.herokuapp.com/api/puzzles/newSolveAttempt';
let piecesJSONObject, pieces, colors, base64Image;
let correctPositions, pieceInCorrectPosition, correctOrientation;
let defaultPalette = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite', 'Red', 'Green'];
let canvas, stage, layer, outline, board, puzzleID;
let width = 1000, height = 500;
let startTime, puzzleSolved, selectedDifficulty, rotationEnabled;
let solvedDiv;
// window.onload = function(){
// 	initializeDataSolve();
// }

function initializeDataSolve()
{

	solvedDiv = document.getElementById('solvedDiv');
	solvedDiv.remove();
	correctPositions = [];
	pieceInCorrectPosition = [];
	correctOrientation = [];
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
		strokeWidth: 2
	});

	outline = new Konva.Rect({
		x: 0,
		y: 0,
		width: width,
		height: height,
		stroke: 'grey',
		fill: '#fff',
		strokeWidth: 1
	});

	layer = new Konva.Layer();
	stage.add(layer);
	layer.add(outline);

	document.getElementById('closeSolverDialogButton').addEventListener('mousedown', function(){
		if(!puzzleSolved)
			saveSolveAttempt(false, puzzleID, startTime);
	});
	
	let numHints = parseInt(localStorage.getItem('numHints'));
	rotationEnabled = true;

	if(numHints == 0)
	{
		selectedDifficulty = 'expert';
	}
	else if(numHints == 3)
	{
		selectedDifficulty = 'intermediate';
	}
	else
	{
		rotationEnabled = false;
		selectedDifficulty = 'novice';
	}
	console.log(selectedDifficulty);
}

function getPieceInCorrectPositionArray()
{
	return pieceInCorrectPosition;
}

function saveSolveAttempt(solved, solvePuzzleID, solveStartTime)
{
	let token = document.getElementById('tokenLabel').innerHTML;
	let timeTaken = performance.now();
	timeTaken = (timeTaken - solveStartTime).toFixed(0);
	timeTaken = Math.floor(timeTaken / 1000);
	
	let gainedExp = 0;
	if(solved && selectedDifficulty == 'expert')
		gainedExp = 50;
	else if(solved && selectedDifficulty == 'intermediate')
		gainedExp = 30;
	else if(solved && selectedDifficulty == 'novice')
		gainedExp = 10;

	let jsonData = {
		token: token,
		puzzleID: solvePuzzleID,
		attemptDuration: timeTaken,
		solved: solved,
		xp: gainedExp
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
			base64Image = data[0].image;
			pieces = piecesJSONObject.pieces;
			colors = piecesJSONObject.colors;
			if(colors === undefined)
				colors = defaultPalette;
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
	let generalTransformer = new Konva.Transformer({
		centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        rotationSnapTolerance: 45,
        resizeEnabled: false,
        borderEnabled: false,
        anchorStroke: '',
        anchorFill: '',
        rotateAnchorOffset: -20,
	});

	layer.add(generalTransformer);
	
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
			if(!pieceInCorrectPosition[pieceIndex])
				document.body.style.cursor = 'pointer';
			// this.scale({x: 1, y: 1});
			group.moveToTop();
			layer.draw();
		});

		piece.on('mouseout', function() {
			document.body.style.cursor = 'default';
			// this.scale({x: 0.5, y: 0.5});
			// layer.draw();
		});

		group.on('dblclick', function() {
			// piece.rotate(90);
			if(rotationEnabled && pieceInCorrectPosition[pieceIndex] == false)
			{
				generalTransformer.nodes([piece]);
				let attributes = generalTransformer._getNodeRect();
				var shape = rotateAroundCenter(attributes, 1.5707963267948966);

				if(Math.floor(shape.rotation) == -1)
				{
					correctOrientation[pieceIndex] = true;
				}
				else
				{
					correctOrientation[pieceIndex] = false;
				}

				generalTransformer._fitNodesInto(shape);
				console.log((shape.rotation));
				checkPositionAndSnapIntoPlace(this, pieceIndex);
			}
			
		});

		// piece.on('transformend', function() {
		// 	console.log(generalTransformer._getNodeRect());
		// });

		group.on('dragend', function(){
			checkPositionAndSnapIntoPlace(this, pieceIndex);
		});

		group.add(piece);
		group.add(hitBox);
		group.draggable(true);
		layer.add(group);

		if(rotationEnabled)
		{
			//randomly rotate piece
			group.add(generalTransformer);
			generalTransformer.nodes([piece]);
			var attributes = generalTransformer._getNodeRect();
			var shape = rotateAroundCenter(attributes, getRandomRotation());
			generalTransformer._fitNodesInto(shape);
			
			if(shape.rotation == 0)
			{
				console.log('correct orientation');
				correctOrientation[pieceIndex] = true;
			}
			else
			{
				correctOrientation[pieceIndex] = false;
			}
		}
		else
		{
				correctOrientation[pieceIndex] = true;
		}

	}

	layer.add(board);
	layer.draw();
	startTime = performance.now();
}

function checkPositionAndSnapIntoPlace(group, pieceIndex)
{
	let hitBox = group.getChildren()[1];
	let hitBoxCoordinates = hitBox.absolutePosition();
	hitBoxCoordinates.x -= 250;

	if(checkPosition(hitBoxCoordinates, correctPositions[pieceIndex]) && correctOrientation[pieceIndex])
	{
		snapPieceIntoPlace(hitBoxCoordinates, correctPositions[pieceIndex], group);
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
}

function getRandomRotation()
{
	let choice = Math.floor(Math.random() * 4);

	if(choice == 0)
	{
		//no change to rotation
		return 0;
	}
	else if(choice == 1)
	{
		//rotate 90 degrees
		return 1.5707963267948966;
	}
	else if(choice == 2)
	{
		//rotate 180 degrees
		return 3.141592653589793;
	}
	else
	{
		//rotate 270 degrees
		return 4.71238898038469;
	}
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

	setTimeout(function() {
		document.getElementById('solverDialogDiv').appendChild(solvedDiv);
		solvedDiv.style.display = "block";

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			solvedDiv.style.display = "none";
		}
	}, 500);

	// alert('Puzzle Solved!');
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

function rotateAroundPoint(shape, angleRad, point) {
  var x = point.x +
      (shape.x - point.x) * Math.cos(angleRad) -
      (shape.y - point.y) * Math.sin(angleRad);
  var y = point.y +
      (shape.x - point.x) * Math.sin(angleRad) +
      (shape.y - point.y) * Math.cos(angleRad);
  return __assign(__assign({}, shape), { rotation: shape.rotation + angleRad, x: x,
      y: y });
}
function rotateAroundCenter(shape, deltaRad) {
  var center = getCenter(shape);
  return rotateAroundPoint(shape, deltaRad, center);
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function getCenter(shape) {
  return {
      x: shape.x +
          (shape.width / 2) * Math.cos(shape.rotation) +
          (shape.height / 2) * Math.sin(-shape.rotation),
      y: shape.y +
          (shape.height / 2) * Math.cos(shape.rotation) +
          (shape.width / 2) * Math.sin(shape.rotation),
  };
}
