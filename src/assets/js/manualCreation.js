import Konva from 'konva';

function everything() {
	let apiURL = "http://localhost:3200/api/puzzles/createPuzzle";

let distanceMetric = 'euclidean';
function setDistanceMetric(metric)
{
	distanceMetric = metric;
}

window.onload = function() {
	let puzzleImage;
	let canvas = document.getElementById('container');
	let canvasCoords = canvas.getBoundingClientRect();
	let width = canvas.offsetWidth;
	let height = canvas.offsetHeight;
	let sites = [];
	let siteBoundaries = [];
	let precision = 0;
	let colors = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite'];
	let generateButtonClicked = false;
	let token = 'KQlH2g5Io_AwCwotB4TUC';
	let piecesJSONObject = {
		'pieces' : []
	};

	let stage = new Konva.Stage({
		container: 'container',
		width: width,
		height: height,
	});

	let layer = new Konva.Layer();

	let square = new Konva.Rect({
		x: 0,
		y: 0,
		width: width,
		height: height,
		stroke: 'black',
		strokeWidth: 2,

	});

	layer.add(square);
	stage.add(layer);

	canvas.addEventListener('mousedown', function(event){
		if(!generateButtonClicked)
		{
			let x = event.clientX - canvasCoords.x;
			let y = event.clientY - canvasCoords.y;
			let point = createPoint(x, y);
			sites.push({
				x: point.x(),
				y: point.y(),
				id: sites.length,
			});

			layer.add(point);
			layer.draw();
			console.log("X: " + x + " Y: " + y);
		}
	});

	function createPoint(x, y)
	{
		let point = new Konva.Circle({
			x: x,
			y: y,
			radius: 1,
			stroke: 'black',
			strokeWidth: 2,
		});

		return point;
	}

	document.getElementById('generatePuzzleButton').addEventListener('mousedown', generatePuzzle);
	
	document.getElementById('euclideanButton').addEventListener('mousedown', function(){
		setDistanceMetric('euclidean');
	});

	document.getElementById('manhattanButton').addEventListener('mousedown', function(){
		setDistanceMetric('manhattan');
	});

	document.getElementById('tokenLabel').innerHTML = token;
	
	document.getElementById('saveButton').addEventListener('mousedown', function() {
		let puzzleName = document.getElementById('puzzleNameInputBox').value;
		let puzzleDescription = document.getElementById('puzzleDescriptionInputBox').value;

		let puzzleImage = stage.toDataURL({ pixelRatio: 0.25 });

		let jsonData = {
			token: token,
			name: puzzleName,
			description: puzzleDescription,
			puzzleObject: piecesJSONObject,
			image: puzzleImage,
			shared: false
		};

		$.ajax({
			type: 'POST',
			url: apiURL,
			headers: { 
				'Access-Control-Allow-Origin' : '*' 
			},
			contentType: 'application/json',
			data: JSON.stringify(jsonData),
			dataType: 'json',
			success: function(data, status) {
				console.log(data);
				console.log(status);
			},
			error: function(data, status) {
				console.log(data);
				console.log(status);	
			}
		});
	});

	document.getElementById('saveAndSubmitButton').addEventListener('mousedown', function(){
		let puzzleImage = stage.toDataURL({ pixelRatio: 0.25 });
		document.getElementById('testingImg').src = puzzleImage;
	});

	function generatePuzzle()
	{
		generateButtonClicked = true;
		generateSiteBoundaries();
		createPieces();
	}

	function createPieces()
	{
		let colorCount = colors.length;
		for(let i = 0; i < sites.length; i++)
		{
			let trimmedPoints = trimPoints(siteBoundaries[i]);
			let piece = new Konva.Line({
				// points: siteBoundaries[i],
				points: trimmedPoints,
				stroke: colors[i % colorCount],
				strokeWidth: 1,
				draggable: true
			});

			piece.on('mouseover', function (){
				document.body.style.cursor = 'pointer';
			});

			piece.on('mouseout', function() {
				document.body.style.cursor = 'default';
			});

			piecesJSONObject.pieces.push(trimmedPoints);
			layer.add(piece);
		}
		layer.draw();
		piecesJSONObject = JSON.stringify(piecesJSONObject);
		// console.log(piecesJSONObject);
	}

	function trimPoints(pointArray)
	{
		let trimmedPoints = [];
		let lastPointCol;
		let firstPointCol = pointArray[0];
		let currentRow = pointArray[1];

		trimmedPoints.push(firstPointCol, currentRow);

		for(let index = 0; index < pointArray.length; index+=2)
		{
			if(currentRow != pointArray[index+1])
			{
				trimmedPoints.push(lastPointCol, currentRow);
				currentRow = pointArray[index+1];
				firstPointCol = pointArray[index];
				trimmedPoints.push(firstPointCol, currentRow);
			}
			else
			{
				lastPointCol = pointArray[index];
			}
		}

		return trimmedPoints;
	}

	function generateSiteBoundaries()
	{
		for(let i = 0; i < sites.length; i++)
			siteBoundaries[i] = [];

		for(let row = 0; row < height; row++)
		{
			for(let col = 0; col < width; col++)
			{
				let distances = calculateDistancesFromSitesToPoint(col, row, sites);
				let equidistantPoints = equidistantPointsPresent(distances);

				siteBoundaries[equidistantPoints[0]].push(col);
				siteBoundaries[equidistantPoints[0]].push(row);
			}
		}
	}

	function equidistantPointsPresent(distances)
	{
		let returnArray = [];
		let minimumDistance = Math.min(...distances);

		if(distanceMetric === 'euclidean')
			minimumDistance = minimumDistance.toFixed(precision) + '';

		let index = 0, counter = 0;

		while(index != -1)
		{
			index = distances.indexOf(minimumDistance);
			if(index != -1)
			{
				returnArray.push(index+counter);
				distances.splice(index, 1);
				counter++;
			}
		}

		return returnArray;
	}

	function calculateDistancesFromSitesToPoint(xOfPoint, yOfPoint, sitePoints)
	{
		let result = [];
		if(distanceMetric === 'euclidean')
		{
			for(let i = 0; i < sitePoints.length; i++)
				result.push(calculateEuclideanDistance(xOfPoint, yOfPoint, sitePoints[i].x, sitePoints[i].y));
		}
		else if(distanceMetric === 'manhattan')
		{
			for(let i = 0; i < sitePoints.length; i++)
				result.push(calculateManhattanDistance(xOfPoint, yOfPoint, sitePoints[i].x, sitePoints[i].y));
		}
		return result;
	}

	function calculateEuclideanDistance(point1X, point1Y, point2X, point2Y)
	{
		let result = Math.pow( Math.pow( point1X - point2X, 2 ) + Math.pow( point1Y - point2Y, 2 ), 0.5 );
		return result.toFixed(precision);
	}


	function calculateManhattanDistance(point1X, point1Y, point2X, point2Y)
	{
		let resultX = point1X - point2X;
		if(resultX < 0)
			resultX *= -1;
		let resultY = point1Y - point2Y;
		if(resultY < 0)
			resultY *= -1;
		let result = resultX + resultY;
		return result;
	}
}
}

var createModule = new everything();

export { createModule };