import Konva from 'konva';
export { width, height, setSites, setDisableEditMode, initializeData, calculateDistancesFromSitesToPoint, 
	equidistantPointsPresent, generateSiteBoundaries, createPieces };

let apiURL = "http://localhost:3200/api/puzzles/createPuzzle";
let distanceMetric = 'euclidean';
let token;

let contentDiv = null;
let aiContentDiv = null;
let canvas;
let canvasCoords;
let width =  500;
let height = 500;
let stage;
let layer;
let square;
let pointsArray = [];
let sites = [];
let siteBoundaries = [];
let pieces = [];
let precision = 0;

let colorPalettes = [];
//Default palette
let selectedPalette;
let paletteCounter = 0;
let radioButtons = [];

let hoverOverPoint = false;
let disableEditMode = false;
let deletePointButtonClicked = false;
let piecesJSONObject;

/** Tutorial for adding more color palettes: **/
//Step 1: Make an array with desired colors - can be hex values or names
let defaultPalette = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite', 'Red', 'Green'];
//Step 2: Add the array to the page using this function with the array as a first and the desired name as a second parameter
addColorPalette(defaultPalette, "Default");
//Step 3: Profit!!

let shadesOfBluePalette = ['DarkBlue', 'DeepSkyBlue', 'MediumBlue', 'DodgerBlue', 'MidnightBlue', 'RoyalBlue', 'DarkSlateBlue', 'CornflowerBlue', 'SkyBlue', 'PowderBlue'];
addColorPalette(shadesOfBluePalette, "Shades of Blue");

let shadesOfGreenPalette = ['Teal', 'MediumSpringGreen', 'LimeGreen', 'ForestGreen', 'MediumSeaGreen', 'LawnGreen', 'PaleGreen', 'GreenYellow', 'Aquamarine'];
addColorPalette(shadesOfGreenPalette, "Shades of Green");

///Add a color palette to the page and needed functionality
function addColorPalette(arrayOfColors, paletteName)
{
	colorPalettes.push(arrayOfColors);
	// let radioButton = document.createElement('mat-radio-button');
	let radioButton = document.createElement('input');
	radioButton.type = 'radio';
	radioButton.class = 'radio-button';
	radioButton.value = paletteName;
	radioButton.innerHTML = paletteName;
	radioButton.name = 'colorPalette';
	radioButton.paletteid = paletteCounter++;
	radioButton.addEventListener('mousedown', function() {
		selectedPalette = colorPalettes[this.paletteid];
		changePuzzleColorPalette(selectedPalette);
	});

	radioButtons.push(radioButton);
}

///Changes the displayed color palette used on the puzzle and re-renders it
function changePuzzleColorPalette(colors)
{
	if(pieces.length > 0)
	{
		layer.removeChildren();
		for(let i = 0; i < pieces.length; i++)
		{
			pieces[i].attrs.stroke = colors[i % colors.length];
			layer.add(pieces[i]);
		}

		layer.draw();
	}
}

function randomizePuzzleColorPalette()
{
	if(pieces.length > 0)
	{
		layer.removeChildren();
		for(let i = 0; i < pieces.length; i++)
		{
			pieces[i].attrs.stroke = getRandomRGB();
			layer.add(pieces[i]);
		}

		layer.draw();
	}
}

///Returns a random RGB value
function getRandomRGB()
{
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

///Initialize data and set functions for buttons
function initializeData(appendedString) 
{
	if(appendedString == undefined)
		appendedString = '';

	disableEditMode = false;
	
	piecesJSONObject = {
		'pieces' : []
	};

	selectedPalette = defaultPalette;
	console.log(canvas);
	canvas = document.getElementById('container'+appendedString);
	console.log(canvas);
	stage = new Konva.Stage({
		container: 'container'+appendedString,
		width: width,
		height: height,
	});

	layer = new Konva.Layer();

	square = new Konva.Rect({
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
		if(!disableEditMode && !hoverOverPoint)
		{
			canvasCoords = canvas.getBoundingClientRect();
			let x = event.clientX - canvasCoords.x;
			let y = event.clientY - canvasCoords.y;
			
			let point = createPoint(x, y);

			layer.add(point);
			layer.draw();
			console.log("X: " + x + " Y: " + y);
		}
	});

	addColorPalettePicker(appendedString);

	document.getElementById('generatePuzzleButton'+appendedString).addEventListener('mousedown', generatePuzzle);

	document.getElementById('euclideanButton'+appendedString).addEventListener('mousedown', function(){
		setDistanceMetric('euclidean');
	});

	document.getElementById('manhattanButton'+appendedString).addEventListener('mousedown', function(){
		setDistanceMetric('manhattan');
	});

	document.getElementById('saveButton'+appendedString).addEventListener('mousedown', function() {
		savePuzzle(false);
	});

	if(document.getElementById('deletePointButton') != null)
	{
		document.getElementById('deletePointButton').addEventListener('mousedown', function() {
			deletePointButtonClicked = !deletePointButtonClicked;
			if(deletePointButtonClicked)
			{
				disableEditMode = true;
				this.innerHTML = 'edit';
			}
			else
			{
				disableEditMode = false;
				this.innerHTML = 'delete';
			}
		});
	}

	// document.getElementById('saveAndSubmitButton').addEventListener('mousedown', function() {
	// 	// let puzzleImage = stage.toDataURL({ pixelRatio: 0.25 });
	// 	// document.getElementById('testingImg').src = puzzleImage;
	// 	savePuzzle(true);
	// });
}

function addColorPalettePicker(appendedString)
{
	let colorPaletteDiv = document.getElementById('colorPalettes'+appendedString);
	let label;
	for(let i = 0; i < radioButtons.length; i++)
	{
		label = document.createElement('label');
		label.innerHTML = radioButtons[i].value;
		colorPaletteDiv.appendChild(radioButtons[i]);
		colorPaletteDiv.appendChild(label);
	}
	
	document.getElementById('randomizeColorsButton'+appendedString).addEventListener('mousedown', randomizePuzzleColorPalette);
}

///Create a post ajax request and send it to the API in order to save the user's created puzzle
function savePuzzle(share)
{
	token = document.getElementById('tokenLabel').innerHTML;
	
	let puzzleName = document.getElementById('puzzleNameInputBox').value;
	let puzzleDescription = document.getElementById('puzzleDescriptionInputBox').value;

	let puzzleImage = stage.toDataURL({ pixelRatio: 0.25 });

	let jsonData = {
		token: token,
		name: puzzleName,
		description: puzzleDescription,
		puzzleObject: piecesJSONObject,
		image: puzzleImage,
		shared: share
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
}

///Set the selected distance metric for the puzzle
function setDistanceMetric(metric)
{
	distanceMetric = metric;
}

///Set disableEditMode to true to prevent user from clicking it any further
function setDisableEditMode(bool)
{
	disableEditMode = bool;
}

///Set the sites array
function setSites(tempSites)
{
	sites = tempSites;
}

///Create a visual representation of where the user clicks
function createPoint(x, y)
{
	let point = new Konva.Circle({
		x: x,
		y: y,
		radius: 1,
		stroke: 'black',
		strokeWidth: 4,
		draggable: true
	});

	point.on('mouseover', function (event){
		document.onmousemove = function(event) {
			canvasCoords = canvas.getBoundingClientRect();
			point.x(event.clientX - canvasCoords.x);
			point.y(event.clientY - canvasCoords.y);
		};

		hoverOverPoint = true;
		document.body.style.cursor = 'pointer';
	});

	point.on('mouseout', function(event) {
		document.onmousemove = null;
		hoverOverPoint = false;
		document.body.style.cursor = 'default';
	});

	point.on('click', function(event) {
		// console.log('clicked!');
		if(deletePointButtonClicked)
		{
			document.onmousemove = null;
			hoverOverPoint = false;
			document.body.style.cursor = 'default';
			point.destroy();
			layer.draw();
		}
	});

	return point;
}

///Calls the necessary functions to generate puzzle's vertiecs as well as the visual representation 
function generatePuzzle()
{
	//Testing data
	// {"sites":[78,108,300,102,100,247,333,281,184,331],"queries":[]}
	// sites = [
	// {
	// 	x:78,
	// 	y:108,
	// },
	// {
	// 	x:300,
	// 	y:102,
	// },
	// {
	// 	x:100,
	// 	y:247,
	// },
	// {
	// 	x:333,
	// 	y:281,
	// },
	// {
	// 	x:184,
	// 	y:331,
	// }
	// ];

	pointsArray = layer.getChildren(function(node) {
		return node.getClassName() === 'Circle';
	});

	for (let i = pointsArray.length - 1; i >= 0; i--) {
		sites.push({
			x: pointsArray[i].attrs.x,
			y: pointsArray[i].attrs.y,
		});
	}

	layer.destroyChildren();

	///This makes sure that the generate button will only generate once
	disableEditMode = true;

	generateSiteBoundaries();
	createPieces();
}

///Creates the puzzle pieces from the siteBoundaries for each site(position selected by the user) 
function createPieces()
{
	for(let i = 0; i < sites.length; i++)
	{
		let trimmedPoints = trimPoints(siteBoundaries[i]);
		let piece = new Konva.Line({
			points: trimmedPoints,
			stroke: selectedPalette[i % selectedPalette.length],
			strokeWidth: 1,
			draggable: true,
		});

		piece.on('mouseover', function (){
			document.body.style.cursor = 'pointer';
		});

		piece.on('mouseout', function() {
			document.body.style.cursor = 'default';
		});

		pieces.push(piece);
		piecesJSONObject.pieces.push(trimmedPoints);
		layer.add(piece);
	}
	layer.draw();
	piecesJSONObject = JSON.stringify(piecesJSONObject);
}

///Shortens the array of vertices for each puzzle piece
function trimPoints(pointArray)
{
	let trimmedPoints = [];
	let lastPointCol = -1;
	let firstPointCol = pointArray[0];
	let currentRow = pointArray[1];
	let crissCross = 1;

	for(let index = 0; index < pointArray.length; index+=2)
	{
		if(currentRow != pointArray[index+1])
		{
			if(crissCross == 1)
			{
				trimmedPoints.push(firstPointCol, currentRow);
				trimmedPoints.push(lastPointCol, currentRow);
				crissCross = -1;
			}
			else
			{
				trimmedPoints.push(lastPointCol, currentRow);
				trimmedPoints.push(firstPointCol, currentRow);
				crissCross - 1;
			}
			
			firstPointCol = pointArray[index];
			lastPointCol = pointArray[index];
			currentRow = pointArray[index+1];	
		}
		else
		{
			lastPointCol = pointArray[index];
		}
	}

	return trimmedPoints;
}

///Generate the boundaries around the sites
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

///Determines which site is closest to a pixel position
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

///Calculates the distances from each site to pixel in position (xOfPoint, yOfPoint) and returns an array
function calculateDistancesFromSitesToPoint(xOfPoint, yOfPoint, sitePoints)
{
	let result = [];
	for(let i = 0; i < sitePoints.length; i++)
		result.push(calculateDistance(xOfPoint, yOfPoint, sitePoints[i].x, sitePoints[i].y));

	return result;
}

///Calculates the distance from point1 to point2 using the selected distance metrix
function calculateDistance(point1X, point1Y, point2X, point2Y)
{
	if(distanceMetric === 'euclidean')
		return calculateEuclideanDistance(point1X, point1Y, point2X, point2Y);
	else if(distanceMetric === 'manhattan')
		return calculateManhattanDistance(point1X, point1Y, point2X, point2Y);
}

///Calculates and returns the Euclidean distance
function calculateEuclideanDistance(point1X, point1Y, point2X, point2Y)
{
	let result = Math.pow( Math.pow( point1X - point2X, 2 ) + Math.pow( point1Y - point2Y, 2 ), 0.5 );
	return result.toFixed(precision);
}

///Calculates and returns the Manhattan distance
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