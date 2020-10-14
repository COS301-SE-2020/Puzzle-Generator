import { width, height, setSites, setDisableEditMode, initializeData, calculateDistancesFromSitesToPoint,
	equidistantPointsPresent, generateSiteBoundaries, createPieces, clearBoard, getCurrentRenderMode } from 'src/assets/js/manualCreation.js';
import { render3D, render2D } from 'src/assets/js/generate3D.js';

///The structure of each individual/chromosome object
let Chromosome = {
	sites: [],
	fitness: -1,
};

///The structure of each site object
let Site = {
	x: 0,
	y: 0,
	surfaceArea: 0,
};

let generatePuzzleAIButton, nextPuzzleButton, previousPuzzleButton, progressBar;
let generatedPuzzles;
let renderedPuzzleIndex;
let tempWidth, tempHeight;
let totalSurfaceArea;

//Genetic Algorithm parameters
let generationSize = 10 + 1;
let tournamentSize = 4;
let maximumIterations = 150;
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
    // return Math.ceil(rand() * max) - 1;
    return Math.floor(Math.random() * max);
}

function expandPuzzle(sites, factor)
{
	let tempSites = [];

	for(let i = 0; i < sites.length; i++)
	{
		tempSites[i] = {
			x: 0,
			y: 0
		}
		tempSites[i].x = sites[i].x * factor;
		tempSites[i].y = sites[i].y * factor;
	}

	return tempSites;
}

export function initializeDataAI()
{
	initializeData('AI');
	setDisableEditMode(true);
	groupDistribution = [];
	generatedPuzzles = [];
	sliders = [];
	labels = [];
	renderedPuzzleIndex = 0;
	generatePuzzleAIButton = document.getElementById('generatePuzzleButtonAI');
	generatePuzzleAIButton.addEventListener('mousedown', generatePuzzleAI);
	generatePuzzleAIButton.remove();

	nextPuzzleButton = document.getElementById('nextPuzzleButton');
	previousPuzzleButton = document.getElementById('previousPuzzleButton');
	nextPuzzleButton.remove();
	previousPuzzleButton.remove();

	progressBar = document.getElementById('progressBar');
	progressBar.style.display = 'none';

	document.getElementById('nextButton').addEventListener('mousedown', displaySlidersCard);

	nextPuzzleButton.addEventListener('mousedown', function(){
		renderedPuzzleIndex++;
		if(renderedPuzzleIndex == generatedPuzzles.length)
		{
			let newGeneration = run();
			for(let index = 0; index < newGeneration.length; index++)
			{
				generatedPuzzles.push(newGeneration[index].sites);
			}
			console.log('reached maximum :<');
		}

		renderPuzzle(generatedPuzzles[renderedPuzzleIndex]);
	});

	previousPuzzleButton.addEventListener('mousedown', function(){
		if(renderedPuzzleIndex != 0)
		{
			renderedPuzzleIndex--;
			renderPuzzle(generatedPuzzles[renderedPuzzleIndex]);
		}
	});
}

function displaySlidersCard()
{
	let numberOfPiecesInGroup;
	numberOfSites = 0;

	for(let i = 0; i < 3; i++)
	{
		numberOfPiecesInGroup = parseInt(document.getElementById('numberOfPiecesInputBox' + (i+1)).value);

		if(document.getElementById('numberOfPiecesInputBox' + (i+1)).value === '')
		{
			numberOfPiecesInGroup = 1;
		}
		if(numberOfPiecesInGroup < 0)
		{
			numberOfPiecesInGroup *= -1;
		}

		groupDistribution.push(numberOfPiecesInGroup);
		numberOfSites += numberOfPiecesInGroup;
	}

	generateSliders(3);

	document.getElementById('inputContainer').appendChild(generatePuzzleAIButton);
}

function generatePuzzleAI()
{
	// document.getElementById('progressBarDiv').appendChild(progressBar);
	// progressBar.style.display = 'block';
	desiredProportions = [];

	for(let i = 0; i < 3; i++)
	{
		let proportion = (sliders[i].value / groupDistribution[i]) / 100;

		for(let counter = 0; counter < groupDistribution[i]; counter++)
			desiredProportions.push(proportion);
	}

	desiredProportions.sort( function(a, b) { return b - a } );

	document.getElementById('inputContainer').innerHTML = '';

	let lastGeneration = run();
	for(let index = 0; index < lastGeneration.length; index++)
	{
		generatedPuzzles.push(lastGeneration[index].sites);
	}

	renderPuzzle(lastGeneration[0].sites);
	// progressBar.remove();
	document.getElementById('puzzleControlsDiv').appendChild(previousPuzzleButton);
	document.getElementById('puzzleControlsDiv').appendChild(nextPuzzleButton);
}

function renderPuzzle(sites)
{
	let expandedSites = expandPuzzle(sites, 10);
	setSites(expandedSites);
	clearBoard();
	generateSiteBoundaries();
	let piecesJSONObject = createPieces();
	piecesJSONObject = JSON.parse(piecesJSONObject);
	if(getCurrentRenderMode() == '3D')
		render3D(piecesJSONObject, 'AI');
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

		let headerLabel = document.createElement('label');
		headerLabel.innerHTML = 'Size ' + (i+1);

		let valueLabel = document.createElement('label');
		valueLabel.innerHTML = defaultValue.toFixed(0);

		let br = document.createElement('br');

		sliders.push(slider);
		labels.push(valueLabel);


		inputContainer.appendChild(headerLabel);
		inputContainer.appendChild(slider);
		inputContainer.appendChild(valueLabel);
		inputContainer.appendChild(br);
	}
}

///Executes the genetic algorithm and returns the resulting site array
function run()
{
	let currentGeneration = [], nextGeneration = [];
	let parentX, parentY, children;
	let x, y;
	tempWidth = width/10;
	tempHeight = height/10;
	totalSurfaceArea = tempWidth * tempHeight;

	nextGeneration = initializeGeneration();
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
	return nextGeneration;
}

///Returns the fittest chromosome from generation
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
	let offset = random(5 + 1);
	let movementDirection = random(4);

	///Move site to the right by offset (increment x by offset), or move to the left if at board edge
	if(movementDirection == 0)
	{
		if(selectedSite.x + offset < tempWidth)
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
		if(selectedSite.y + offset < tempHeight)
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
			tempSite.x = random(tempWidth + 1);
			tempSite.y = random(tempHeight + 1);
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

	for(let row = 0; row < tempHeight; row++)
	{
		for(let col = 0; col < tempWidth; col++)
		{
			let distances = calculateDistancesFromSitesToPoint(col, row, chromosome.sites);
			let equidistantPoints = equidistantPointsPresent(distances);

			chromosome.sites[equidistantPoints[0]].surfaceArea += 1;
		}
	}
}
