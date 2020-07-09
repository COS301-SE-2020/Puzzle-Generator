let distanceMetric = 'euclidean';

function setDistanceMetric(metric)
{
	distanceMetric = metric;
}

window.onload = function() {
	let canvas = document.getElementById('container');
	let width = canvas.offsetWidth;
	let height = canvas.offsetHeight;
	let sites = [];
	let siteBoundaries = [];
	let precision = 4;
	let colors = ['Plum', 'Tomato', 'Orange', 'Violet', 'Gray', 'MediumSeaGreen', 'LightGray', 'SlateBlue', 'Brown', 'Aquamarine', 'AntiqueWhite'];
	let generateButtonClicked = false;
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
			let x = event.clientX;
			let y = event.clientY;
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
	
	document.getElementById('saveButton').addEventListener('mousedown', function(){
		
	});

	document.getElementById('saveAndSubmitButton').addEventListener('mousedown', function(){
		
	});

	function generatePuzzle()
	{
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
		console.log(piecesJSONObject);
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
				let distances = calculateDistancesFromSitesToPoint(col, row, sites, distanceMetric);
				let equidistantPoints = equidistantPointsPresent(distances);
				// for(let i = 0; i < equidistantPoints.length; i++)
				// {
				// 	siteBoundaries[equidistantPoints[i]].push(col);
				// 	siteBoundaries[equidistantPoints[i]].push(row);
				// }

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
			//For euclidean
			// index = distances.indexOf(minimumDistance.toFixed(precision) + '');
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

	function calculateDistancesFromSitesToPoint(xOfPoint, yOfPoint, sitePoints, distanceMetric)
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