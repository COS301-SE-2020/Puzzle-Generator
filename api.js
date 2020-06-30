const express = require('express');
const Pool = require("pg").Pool
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const Str = require('@supercharge/strings')
var cors = require('cors');
const { request } = require('express');

const PORT = process.env.port || 3200

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
app.use(cors());

app.all("/*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
	next();
  });

/*
**user endpoints below
*/

//create user endpoint
app.post('/api/users/createUser', (request, response) => {
	//retrieve password, username and name from the request body
	const newUserUsername = request.body.username;
	const newUserPassword = request.body.password;
	const newUserName = request.body.name;
	//hash password using bcrypt  
	const hashedPassword = bcrypt.hashSync(newUserPassword, 10);
	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(newUserUsername))
	{//checking if email is valid
		response.status(403).send("Invalid username, must be a valid email address");
	}
	else
	{
		pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [newUserUsername], (error, results) => {
			if(error){//failure to connect to db server
				response.status(400).send("Server error: " + error.message );
			}
			else
			{
				if(results.rowCount >= 1){
					response.status(409).send("Email is already registered.");
				}
				else
				{
					//generate token for user
					var randomToken = Str.random();
					//check if token does not exist in db. Generate new token if it exists
					function checkToken() {
			            pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [randomToken],(err,res)=>{
				            if(err)
				            {
								response.status(400).send("Server error at token check: " + errr.message);
				              }
				            if(res.rowCount == 0)
				            {
				                return;
				            }
				            else // Token allready exists, generates a new token and calls function again
				            {
				                response.status(409);//.send("Token already assigned to user in the db"); 
								randomToken = Str.random();
				                checkToken() 
				            }
			            });
		          	};
					  //checkToken();
					  
					//insert new user record into db
					pool.query('INSERT INTO public."users"("name", "username", "password", "token") VALUES ($1,$2,$3,$4) ', [newUserName, newUserUsername, hashedPassword, randomToken], (err, res) => {
						if(err){
							response.status(400).send("Server error: " + err.message );
						}
						else
						{
							pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [newUserUsername], (error, results) => {
								if(results.rowCount >= 1){
									response.status(201).json({ "token": results.rows[0].token});
								}
							})
						}
					}); 
				}
			}
		});
	}
});

//login user endpoint
app.post('/api/users/login', (request, response) => {
	//retrieve username from the request body
	const enteredUsername = request.body.username;
	const password = request.body.password;

	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(enteredUsername))
	{//checking if email is valid
		response.status(403).send("Invalid username, must be a valid email address");
	}
	else
	{
		pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [enteredUsername], (error, results) => {
			if(error){//failure to connect to db server
				response.status(400).send("Server error: " + error.message );
			}
			else
			{
				if(results.rowCount == 0){
					response.status(404).send("Email is not registered. Please sign up");
				}
				else
				{
					bcrypt.compare(password, results.rows[0].password, function(err, res) {
						if(res){
							response.status(201).json({"token": results.rows[0].token});
						}
						else {
							response.status(403).send("Passwords do not match");
						}
					})
				}
			}
		});
	}
});

//update user email endpoint
app.put('/api/users/updateUsername', (request, response) => {
	const userToken = request.body.token;
	const newEmail = request.body.username;

	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(newEmail))
	{//checking if email is valid
		response.status(403).send("Invalid username, must be a valid email address");
	}
	else
	{
		pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
			if(error){
				response.status(400).send("Server error: " + error.message);
			}
			else{
				if(results.rowCount >= 1){
					pool.query('UPDATE public."users" SET "username" = ($1) WHERE "token" = ($2)', [newEmail, userToken], (error, results) => {
						if(error){
							response.status(400).send("Server error: " + error.message);
						}
						else{
							pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
								if(error){
									response.status(400).send("Server error: " + error.message);
								}
								else{
									if(results.rowCount == 1){
										if(results.rows[0].username == newEmail)
										{
											response.status(200).send("Username updated successfully");
										}
									}
								}
							});
						}
					});
				}
				else{
					response.status(404).send("User not found");
				}
			}
		});
	}
});

//update user name endpoint
app.put('/api/users/updateName', (request, response) => {
	const userToken = request.body.token;
	const newName = request.body.name;

	pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
		if(error){
			response.status(400).send("Server error: " + error.message);
		}
		else{
			if(results.rowCount >= 1){
				pool.query('UPDATE public."users" SET "name" = ($1) WHERE "token" = ($2)', [newName, userToken], (error, results) => {
					if(error){
						response.status(400).send("Server error: " + error.message);
					}
					else{
						pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
							if(error){
								response.status(400).send("Server error: " + error.message);
							}
							else{
								if(results.rowCount == 1){
									if(results.rows[0].name == newName)
									{
										response.status(200).send("Name updated successfully");
									}
								}
							}
						});
					}
				});
			}
			else{
				response.status(404).send("User not found");
			}
		}
	});
});
//reset user password endpoint
app.put('/api/users/resetPassword', (request, response) => {
	const email = request.body.username;
	const newPassword = request.body.password;
	const hashedPassword = bcrypt.hashSync(newPassword, 10);

	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(email))
	{//checking if email is valid
		response.status(403).send("Invalid username, must be a valid email address");
	}
	else
	{
		pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [email], (error, results) => {
			if(error){
				response.status(400).send("Server error: " + error.message);
			}
			else{
				if(results.rowCount >= 1){
					pool.query('UPDATE public."users" SET "password" = ($1) WHERE "username" = ($2)', [hashedPassword, email], (error, results) => {
						if(error){
							response.status(400).send("Server error: " + error.message);
						}
						else{
							pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [email], (error, results) => {
								if(error){
									response.status(400).send("Server error: " + error.message);
								}
								else{
									if(results.rowCount == 1){
										if(results.rows[0].password == hashedPassword)
										{
											response.status(200).send("Password updated successfully. Please login");
										}
									}
								}
							});
						}
					});
				}
				else{
					response.status(404).send("User not found. Please make sure email is valid")
				}
			}
			});
	}
})

/*
**puzzle endpoints below
*/

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
						response.status(200).send("Puzzle created");
					}
				});
			}
		}
	})
});


//rating creation endpoint
app.post('/api/puzzle/createPuzzleRating', (request, response) => {
	// //set headers
	//   response.header('Access-Control-Allow-Origin','*');
	//   response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	//   response.header('Content-Type','application/json');
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
						response.status(200).send("Rating created");
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
										ratingJSONObjectReturned = {"title":results.rows[0].name, "rating": ratingsJSONArrayObject[index].rating, "userId": ratingsJSONArrayObject[index].userId, "puzzleId": ratingsJSONArrayObject[index].puzzleId};
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

app.get('/', (req, res) => res.send('Puzzle Generator API'))


app.listen(PORT);
console.log("Running on port: ", PORT);