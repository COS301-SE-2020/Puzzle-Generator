// //The structure of each individual/chromosome object
let Chromosome = {
	sites: [],
	fitness: -1,
};

// //The structure of each site object
let Site = {
	x: 0,
	y: 0,
	surfaceArea: 0,
}

let totalSurfaceArea;

let generationSize = 10 + 1;
let tournamentSize = 4;
let maximumIterations = 100;
let seedString = 'apples';

let sliders = [];
let labels = [];
let numberOfSites = 6;
let desiredProportions = [0.40, 0.20, 0.10, 0.10, 0.10, 0.10];
let groupDistribution = [];

function copyObject(obj)
{
    return JSON.parse(JSON.stringify(obj));
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

function expandPuzzle(sites, factor)
{
	for(let i = 0; i < sites.length; i++)
	{
		sites[i].x = sites[i].x * factor;
		sites[i].y = sites[i].y * factor;
	}

	return sites;
}

window.onload = initializeDataAI;

function initializeDataAI()
{
	initializeData();

	document.getElementById('nextButton').addEventListener('mousedown', function() {
		numberOfSites = document.getElementById('numberOfPiecesInputBox').value;

		groupDistribution.push(document.getElementById('numberOfPiecesInputBox1').value);
		groupDistribution.push(document.getElementById('numberOfPiecesInputBox2').value);
		groupDistribution.push(document.getElementById('numberOfPiecesInputBox3').value);

		generateSliders(3);
		
		document.getElementById('generatePuzzleAIButton').hidden = false;
	});

	document.getElementById('generatePuzzleAIButton').addEventListener('mousedown', function(event) {
		generatePuzzleAI();
	});
}

function generatePuzzleAI()
{
	desiredProportions = [];

	for(let i = 0; i < 3; i++)
	{
		let proportion = (sliders[i].value / groupDistribution[i]) / 100;

		for(let counter = 0; counter < groupDistribution[i]; counter++)
			desiredProportions.push(proportion);
	}

	desiredProportions.sort( function(a, b) { return b - a } );

	document.getElementById('inputContainer').innerHTML = '';
	document.getElementById('container').hidden = false;
	document.getElementById('puzzleInformationContainer').hidden = false;

	sites = run();
	sites = expandPuzzle(sites, 10);
	width = width * 10;
	height = height * 10;

	generateButtonClicked = true;
	generateSiteBoundaries();
	createPieces();
}

function generateSliders(numberOfSliders)
{
	let inputContainer = document.getElementById('inputContainer');
	let defaultValue = 100/numberOfSliders;

	inputContainer.innerHTML = '';

	for(let i = 0; i < numberOfSliders; i++)
	{
		let slider = document.createElement('input');
		slider.type = 'range';
		slider.min = 1.00;
		slider.max = 100.00 - numberOfSliders + 1;
		slider.value = defaultValue;
		slider.previousValue = defaultValue;
		slider.sliderid = i;
		slider.step = 0.01;
		slider.addEventListener('input', function() {
			let difference = this.previousValue - this.value;
			let distributedValue = (difference/( numberOfSliders - 1 )).toFixed(2);

			let leftover = 0;
			for(let i = 0 ; i < numberOfSliders; i++)
			{
				if(i != this.sliderid)
				{
					let tempValue = ( parseFloat(sliders[i].value) + parseFloat(distributedValue) );
					if(tempValue >= 1.00)
					{
						if(leftover != 0 && ( tempValue + leftover ) >= 1.00)
						{
							tempValue += leftover;
							leftover = 0;
						}

						sliders[i].value = tempValue;
						sliders[i].previousValue = tempValue;
						labels[i].innerHTML = parseInt(tempValue);
					}
					else
					{
						leftover += parseFloat(distributedValue);
					}
				}
			}

			for(let i = 0; leftover != 0 && i < numberOfSliders; i++)
			{
				if(i != this.sliderid)
				{
					let tempValue = parseFloat(sliders[i].value) + leftover;
					if(tempValue >= 1.00)
					{
						sliders[i].value = tempValue;
						sliders[i].previousValue = tempValue;
						labels[i].innerHTML = parseInt(tempValue);
						leftover = 0;
					}
				}
			}

			this.previousValue = this.value;
			labels[this.sliderid].innerHTML = parseInt(this.value);
		});

		let label = document.createElement('label');
		label.innerHTML = defaultValue.toFixed(0);

		let br = document.createElement('br');

		sliders.push(slider);
		labels.push(label);

		inputContainer.appendChild(slider);
		inputContainer.appendChild(label);
		inputContainer.appendChild(br);
	}
}

///Execute the genetic algorithm and returns the resulting site array 
function run()
{
	let currentGeneration = [], nextGeneration = [];
	let parentX, parentY, children;
	let x, y;
	width = 500/10;
	height = 500/10;
	totalSurfaceArea = width * height;

	nextGeneration = initializeGeneration();
	console.log(nextGeneration);
	for(let generation = 0; generation < maximumIterations; generation++)
	{
		currentGeneration = nextGeneration;
		nextGeneration = [];
		nextGeneration.push( getFittest(currentGeneration) );
		for(let i = 0; i < generationSize - 1; i+=2)
		{
			parentX = runTournament(currentGeneration);
			parentY = runTournament(currentGeneration);
			children = crossover(parentX, parentY);
			mutate(children[0]);
			mutate(children[1]);
			calculateAndSetFitness(children[0]);
			calculateAndSetFitness(children[1]);
			nextGeneration.push(...children);
		}
	}

	console.log(nextGeneration);
	console.log('done!');
	return getFittest(nextGeneration).sites;
}

function getFittest(generation)
{
	let fittestChromosome = null;
	fittestChromosome = generation[0];

	for(let i = 1; i < generationSize; i++)
		if(generation[i].fitness < fittestChromosome.fitness)
			fittestChromosome = generation[i];

	return fittestChromosome;
}

///Randomly selected a site and a movement direction; then proceed to execute movement using a random offset
function mutate(chromosome)
{
	// let siteIndex = random(numberOfSites);
	let selectedSite = chromosome.sites[random(numberOfSites)];
	let offset = random(5);
	let movementDirection = random(4);

	///Move site to the right by offset (increment x by offset), or move to the left if at board edge
	if(movementDirection == 0)
	{
		if(selectedSite.x + offset < width)
			selectedSite.x = selectedSite.x + offset;
		else
			selectedSite.x = selectedSite.x - offset;
	}
	///Move site to the left by offset (decrement x by offset), or move to the right if at the board edge
	else if(movementDirection == 1)
	{
		if(selectedSite.x - offset > 0)
			selectedSite.x = selectedSite.x - offset;
		else
			selectedSite.x = selectedSite.x + offset;
	}
	///Move site upwards by offset (decrement y by offset), or move downwards if at the board edge
	else if(movementDirection == 2)
	{
		if(selectedSite.y - offset > 0)
			selectedSite.y = selectedSite.y - offset;
		else
			selectedSite.y = selectedSite.y + offset;
	}
	///Move site downwards by offset (increment y by offset), or move upwards if at board edge
	else if(movementDirection == 3)
	{
		if(selectedSite.y + offset < height)
			selectedSite.y = selectedSite.y + offset;
		else
			selectedSite.y = selectedSite.y - offset;
	}
}

/**
	Crossover operation; randomly select a site index and swap the sites located on said index. 
	This function will create two new children, swap their sites and return an array containing them.
**/
function crossover(chromosomeX, chromosomeY)
{
	let swapIndex = random(numberOfSites);
	let childX = copyObject(chromosomeX);
	let childY = copyObject(chromosomeY);

	let tempSite = childX.sites[swapIndex];
	childX.sites[swapIndex] = childY.sites[swapIndex];
	childY.sites[swapIndex] = tempSite;

	return [childX, childY];
}

///Tournament selection of parent for next generation - fittest from a random bunch is returned.
function runTournament(generation)
{
	let chosenChromosome, fittestChromosome = null;

	for(let i = 0; i < tournamentSize; i++)
	{
		chosenChromosome = generation[random(generationSize)];
		if(fittestChromosome == null || chosenChromosome.fitness < fittestChromosome.fitness)
			fittestChromosome = chosenChromosome;
	}

	return fittestChromosome;
}

///Create and return the initial generation of chromosomes
function initializeGeneration()
{
	let currentGeneration = [];
	for(let i = 0; i < generationSize; i++)
	{
		let newChromosome = copyObject(Chromosome);
		for(let siteIndex = 0; siteIndex < numberOfSites; siteIndex++)
		{
			let tempSite = copyObject(Site);
			tempSite.x = random(width + 1);
			tempSite.y = random(height + 1);
			newChromosome.sites.push(tempSite);
		}

		calculateAndSetFitness(newChromosome);
		currentGeneration.push(newChromosome);
	}

	return currentGeneration;
}

///Calculate and set the fitness of a chromosome
function calculateAndSetFitness(chromosome)
{
	determineAndSetSiteBoundaries(chromosome);
	sortSites(chromosome);
	let fitness = 0, difference;

	for(let i = 0; i < desiredProportions.length; i++)
	{
		difference = ( desiredProportions[i] * totalSurfaceArea ) - chromosome.sites[i].surfaceArea;
		if(difference < 0)
			difference *= -1;
		fitness += difference;
	}

	chromosome.fitness = fitness;
}

///Sort the sites according to surface area from highest to lowest
function sortSites(chromosome)
{
	let sites = chromosome.sites;
	sites.sort(function(siteA, siteB) { return 	siteB.surfaceArea - siteA.surfaceArea });
}

///Generate the boundaries around the sites
function determineAndSetSiteBoundaries(chromosome)
{
	for(let i = 0; i < numberOfSites; i++)
		chromosome.sites[i].surfaceArea = 0;
	
	for(let row = 0; row < height; row++)
	{
		for(let col = 0; col < width; col++)
		{
			let distances = calculateDistancesFromSitesToPoint(col, row, chromosome.sites);
			let equidistantPoints = equidistantPointsPresent(distances);

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