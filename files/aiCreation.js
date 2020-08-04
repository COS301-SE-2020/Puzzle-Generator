// //The structure of each individual/chromosome object
let Chromosome = {
	sites: [],
	fitness: -1,
};

// //The structure of each site object
let Site = {
	x: 0,
	y: 0,
	siteBoundaries: [],
	surfaceArea: 0,
}

// let width = 500;
// let height = 500;
let totalSurfaceArea = width * height;
// let distanceMetric = 'euclidean';


let generationSize = 10;
let maximumIterations = 10;
let seedString = 'apples';
let numberOfSites = 3;
let desiredProportions = [0.50, 0.25, 0.25];


function newObject(obj)
{
    return Object.assign({}, obj);
}

function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

let seed = xmur3(seedString);
let rand = mulberry32(seed());

function random(max)
{
    return Math.ceil(rand() * max) - 1;
}

function begin()
{
	let currentGeneration, nextGeneration;
	let x, y;
	// initialPopulation();
	for(let generation = 0; generation < maximumIterations; generation++)
	{
		currentGeneration = [];
		for(let i = 0; i < generationSize; i++)
		{
			let newChromosome = {
				sites: [],
				fitness: -1,
			};
			for(let siteIndex = 0; siteIndex < numberOfSites; siteIndex++)
			{
				let tempSite = {
					x: 0,
					y: 0,
					siteBoundaries: [],
					surfaceArea: 0,
				};
				x = random(width + 1);
				// console.log('x: ' + x);
				tempSite.x = x;
				y = random(height + 1);
				// console.log('y: ' + y);
				tempSite.y = y;
				newChromosome.sites.push(tempSite);
			}

			calculateAndSetFitness(newChromosome);
			// console.log(newChromosome);
			currentGeneration.push(newChromosome);
		}

		// console.log(currentGeneration);
	}

	console.log('done!');
}



///Calculate and set the fitness of a chromosome
function calculateAndSetFitness(chromosome)
{
	determineAndSetSiteBoundaries(chromosome);
	// calculateAndSetSurfaceAreas(chromosome);
	// sortSites(chromosome);

	let fitness = 0, difference;

	for(let i = 0; i < desiredProportions.length; i++)
	{
		difference = ( desiredProportions[i] * totalSurfaceArea ) - chromosome.sites[i].surfaceArea;
		// console.log(totalSurfaceArea);
		if(difference < 0)
			difference *= -1;
		fitness += difference;
	}

	chromosome.fitness = fitness;
}

///Sort the sites according to surface area from highest to lowest
function sortSites(chromosome)
{
	chromosome.sites.sort(function(siteA, siteB) { 
		siteB.surfaceArea - siteA.surfaceArea; 
	});
}

///Generate the boundaries around the sites
function determineAndSetSiteBoundaries(chromosome)
{
	for(let row = 0; row < height; row++)
	{
		for(let col = 0; col < width; col++)
		{
			let distances = calculateDistancesFromSitesToPoint(col, row, chromosome.sites);
			let equidistantPoints = equidistantPointsPresent(distances);

			// chromosome.sites[equidistantPoints[0]].siteBoundaries.push(col);
			// chromosome.sites[equidistantPoints[0]].siteBoundaries.push(row);
			chromosome.sites[equidistantPoints[0]].surfaceArea += 1;
		}
	}
}

///Calculate and set the surface areas for each of the puzzle pieces/sites in a chromosome
function calculateAndSetSurfaceAreas(chromosome)
{
	let sites = chromosome.sites;
	let tempSurfaceAreasArray = [];
	let surfaceArea;
	for(let index = 0; index < sites.length; index++)
	{
		/**
			Since siteBoundaries contains all the pixel x-y coordinates that belong to the site, 
			dividing the length will give the total number of pixels which is also the area occupied 
			by the puzzle piece at said site.
		**/
		surfaceArea = sites[index].siteBoundaries.length / 2;
		sites[index].surfaceArea = surfaceArea;
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
	let length = sitePoints.length;
	for(let i = 0; i < length; i++)
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