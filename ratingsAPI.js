const express = require('express');
const Pool = require("pg").Pool
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const Str = require('@supercharge/strings')

const PORT = process.env.port || 8080

const DB_NAME = "dfqtmc7rr2t3l3";
const DB_USERNAME = "kxdtgexhuustyz";
const DB_PASSWORD = "90aa97f7e6cbcae5a990672689f5501f60beb55617de070c88f1913aed6f7b5f";
const DB_HOST = "ec2-54-228-209-117.eu-west-1.compute.amazonaws.com";

const pool = new Pool
({
    user:DB_USERNAME,
    host:DB_HOST,
    database:DB_NAME,
    password:DB_PASSWORD,
    ssl: { rejectUnauthorized: false }
})

const app = express();
app.use(express.json());


//puzzle creation endpoint
app.post('/api/puzzle/createPuzzle', (request, response) => {
	const userToken = request.body.token;
	const puzzleName = request.body.name;
	var currentUserId = null;

	pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
		if(error){			
			response.status(400).send("Server error: " + error.message );
		}
		else
		{
			if(results.rowCount >= 1)
			{
				currentUserId = results.rows[0].userId;
				pool.query('INSERT INTO public."puzzle"("name", "creatorID") VALUES ($1,$2) ', [puzzleName, currentUserId], (error, res) => {
					if(error)
					{
						response.status(400).send("Server error: " + error.message );
					}
					else
					{
						response.status(200);
					}
				});
			}
		}
	})
});


//rating creation endpoint
app.post('/api/puzzle/createPuzzleRating', (request, response) => {
	const userToken = request.body.token;
	const selectedPuzzlePuzzleId = request.body.puzzleId;
	const newRating = request.body.rating;
	var currentUserId = null;

	pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
		if(error){			
			response.status(400).send("Server error: " + error.message );
		}
		else
		{
			if(results.rowCount >= 1)
			{
				currentUserId = results.rows[0].userId;
				pool.query('INSERT INTO public."puzzleRating"("rating", "puzzleId", "userId") VALUES ($1,$2,$3) ', [newRating,selectedPuzzlePuzzleId, currentUserId], (error, res) => {
					if(error)
					{
						response.status(400).send("Server error: " + error.message );
					}
					else
					{
						response.status(200);
					}
				});
			}
		}
	})
});


//endpoint for getting puzzle ratings
app.get('/api/getRatings', (request,response) => {
	var ratingsJSONArrayObject = {};
	var ratingJSONObjectReturned = {};
	var currRating = null;
	var currName = null;
	var currPID;
	var index = 0;
	var array = [];
				pool.query('SELECT * FROM public."puzzleRating"', (error, results) => {
					if(error){			
						response.status(400).send("Server error: " + error.message );
					}
					else
					{
						ratingsJSONArrayObject = results.rows;
						var ratingsJSONArrayObjectSize = Object.keys(ratingsJSONArrayObject).length;
						ratingsJSONArrayObject.forEach(obj => {
					        Object.entries(obj).forEach(([key, value]) => {
					        	if(key == "puzzleId"){
					        		currPID = `${value}`;
					        		pool.query('SELECT * FROM public."puzzle" WHERE "puzzleId" = ($1)', [currPID], (error, results) => {
					        			if(error){			
											response.status(400).send("Server error: " + error.message );
										}
										else
										{
											if(results.rowCount  > 0 )
											{
												ratingJSONObjectReturned = {"title":results.rows[0].name, "rating": ratingsJSONArrayObject[index].rating};
												++index;
												array.push(ratingJSONObjectReturned);
												if(index == ratingsJSONArrayObjectSize)
												{
													response.status(201).send(array);
												}
											}
										}
					        		});
					        	}
					        });
				    	});
					}
				});
});


app.get('/', (req, res) => res.send('ratings API testing'));


app.listen(PORT);
console.log(`Server listening on port: ${PORT}`);

module.exports = app;
