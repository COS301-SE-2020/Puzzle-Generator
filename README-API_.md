# Prometheus Puzzles Puzzle Generator API

The system will make use of the API for communication between components. This documentation explains how the API is structured as well as how one can access files on this branch.

The API makes use of [RESTful](https://restfulapi.net/resource-naming/) conventions.

All calls made to the database make use of the Sequelize frameworks. As such, the API is structured as follows:
Models - this contains definitions of the users, puzzles and puzzle ratings classes as defined in the database. The models are used in the endpoints when referencing a specific table as per Sequelize standards
Routes - this contains the puzzle.js and users.js files containing the endpoints described below. This separation makes it easier to see which endpoint are concerned with user operations and which with puzzle operations.
App.js - this is the entry point of the application. It also defines the major routes `api/user` and `api/puzzles` which each of the endpoints below expand on.

# Table of Contents

1. [Endpoints](#endpoints)  
		1.1		[User Endpoints](#user-endpoints)  
		1.2		[Puzzle Endpoints](#puzzle-endpoints)     
2. [Response Codes](#response-codes) 

3. [Users](#users)  
		3.1		[Create User](#create-user)  
		3.2		[Login](#login)  
		3.3		[Get User](#get-user)  
		3.4		[Reset Password](#reset-password)  
		3.5		[Update Username](#update-username)   
		3.6		[Update Name](#update-name)   
		3.7		[Get Puzzles By User](#get-puzzles-by-user)  
		3.8		[Get Puzzle Ratings By User](#get-puzzle-ratings-by-user)  

4. [Puzzles](#puzzles)  
		4.1		[Get All Puzzles](#get-all-puzzles)   
		4.2		[Get Puzzle By ID](#get-puzzle-by-id)   
		4.3		[Get Searched Puzzles](#get-searched-puzzles)   
		4.4		[Create Puzzle](#create-puzzle)   
		4.5		[Get All Puzzle Ratings](#get-all-puzzle-ratings) 
        4.6		[Create Puzzle Rating](#create-puzzle-rating) 
         
    
# Endpoints

## User Endpoints

| Method		| Path																				| Used for																|
|-----------|---------------------------------------------|-----------------------------------------|
| `POST`		| `/createUser`																| Create new user													|
| `POST`		| `/login`										| Login 												|
| `POST`			| `/getUser`												| Get user																|
| `PUT`	| `/resetPassword` 												| Reset password															|								|
| `PUT`			| `/updateUsername`								| Update user's username									|
| `PUT`			| `/updateName`										| Update user's name											|
| `POST`			| `/getPuzzlesByUser`									| Get puzzles created by user					|
| `POST`			| `/getPuzzleRatingsByUser`										| Get list of puzzles ratings made by user	|

## Puzzle Endpoints

| Method		| Path															            | Used for			                          					|
|-----------|-----------------------------------------------|---------------------------------------------------|
| `GET`    | `/getAllPuzzles`                          | Get all puzzles                              |
| `GET`			| `/getPuzzleByID:id`							            | Get puzzle by id				          						|
| `GET`			| `/getSearchedPuzzles`	        | Get searched puzzles             										|
| `POST`			| `/createPuzzle`	        | Create puzzle			          								|
| `GET`  | `/getAllPuzzleRatings`        	| Get all puzzle ratings							    	      			|
| `POST`  | `/createPuzzleRating`        	| Create puzzle rating							    	      			|

# Response Codes
There are a number of global response codes that apply to all requests made and a number of response codes which are specific to each endpoint, the table below describes all of the global response codes.

| Code	| Description																																																		|
|-------|---------------------------------------------------------------------------------------------------------------|
| `200` | Valid Request, a body is returned in the response																															|
| `201` | Valid Request (Created), body is returned in the response																														|
| `403` | Invalid Request, check if the request body contains all of the required fields and if the body is valid JSON	|
| `404` | Not Found, requested record is not found. Ensure correct parameters/details were entered into input fields	|
| `409` | Invalid Request, one is trying to create an existing record	|
| `500` | Internal Server Error, something happen causing the sequelize query to fail	|

# Users

## Create User

This endpoint is used to create an account for a user.

##### HTTP Request

`POST /createUser`

##### Request Body

The request body requires the following fields:

```json
{
	"name": "Jane Doe",
	"username": "jane@doe.com",
	"password": "janedoe"
}
```

##### Response Body

This endpoint will return the `token` of the newly created user which must be used for all further requests.

```json
{
	"token": "vjefe7238ou23jonefciohd"
}
```

##### Response Status Codes

| Status Code | Description																														  |
|-------------|-------------------------------------------------------------------------|
| `201`       | User created																													  |
| `403`       | Invalid `username` (must be a valid email address)											|
| `409`       | User already exists																										  |

[Back to Table of Contents](#table-of-contents)

## Login

This endpoint is used to login the user to their existing account.

##### HTTP Request

`POST /login`

##### Request Body

The following fields must be provided in the request body:

```json
{
	"username": "jane@doe.com",
	"password": "janedoe"
}
```

##### Response Body

This endpoint will return a `token` which must be used for all further requests and user name.

```json
{
    "name": "Jane Doe",
	"token": "vjefe7238ou23jonefciohd"
}
```

##### Response Status Codes

| Status Code | Description											                                          |
|-------------|---------------------------------------------------------------------------|
| `200`       | User `token` returned																											  |
| `404`       | Incorrect `username` or `password`										                    |

[Back to Table of Contents](#table-of-contents)

## Get User

This endpoint retrieves a specific users details. A token is passed into the request body.

##### HTTP Request

`POST /getUser`

##### Request Body

The following fields must be provided in the request body:

```json
{
	"token": "vjefe7238ou23jonefciohd"
}
```

##### Response Body

```json
{
	"name": "Jane Doe",
	"username": "jane@doe.com"
}
```

##### Response Status Codes

| Status Code | Description										                                        |
|-------------|-----------------------------------------------------------------------|
| `200`       | User returned																		                    |

[Back to Table of Contents](#table-of-contents)

## Reset Password

This endpoint is used to delete a user's account.

##### HTTP Request

`PUT /resetPassword`

##### Request Body

The request body requires the following fields:

```json
{
	"username": "jane@doe.com",
	"password": "janedoe"
}
```

##### Response Body

This endpoint will not return any fields in the response body.

##### Response Status Codes

| Status Code | Description																														  |
|-------------|-------------------------------------------------------------------------|
| `200`				| Paasword reset																													  |
| `404`       | `username` not found																											  |

[Back to Table of Contents](#table-of-contents)

## Update Username

This endpoint updates a user's username.

##### HTTP Request

`PUT /updateUsername`

##### Request Body

The following fields must be provided in the request body:

```json
{
	"username": "janet@doe.com"
}
```

##### Response Body
The new username is returned in the response body

```json
{
	"username": "janet@doe.com"
}
```

##### Response Status Codes

| Status Code | Description							                                        |
|-------------|-----------------------------------------------------------------|
| `201`				| Username changed											                          |
| `403`       | Invalid `username` (must be a valid email address)	|

[Back to Table of Contents](#table-of-contents)

## Update Name

This endpoint updates a user's name.

##### HTTP Request

`PUT /updateName`

##### Request Body

The following fields must be provided in the request body:

```json
{
	"name": "Janet Doe"
}
```

##### Response Body

##### Response Body
The new name is returned in the response body

```json
{
	"name": "janet@doe.com"
}
```

##### Response Status Codes

| Status Code | Description							                                        |
|-------------|-----------------------------------------------------------------|
| `201`				| `name` updated	

[Back to Table of Contents](#table-of-contents)

## Get Puzzles By User

This endpoint will return a list of puzzles created by the user

##### HTTP Request

`POST /getPuzzlesByUser`

##### Request Body

The following fields must be provided in the request body:

```json
{
	"token": "vjefe7238ou23jonefciohd"
}
```

##### Response Body

This endpoint will return a list of puzzles created by the user as a json object or an array of json objects depending on the number of puzzles made
```json
{
	"puzzleID": 1,
    "name": "XYZ",
    "description": "Cool puzzle",
    "dateCreated": "23-12-2020"
}
```

##### Response Status Codes

| Status Code | Description							                                        |
|-------------|-----------------------------------------------------------------|
| `200`				| Puzzles returned																									  |	

[Back to Table of Contents](#table-of-contents)

## Get Puzzle Ratings By User

This endpoint updates a user's listening mode preference.

##### HTTP Request

`POST /getPuzzleRatingsByUser`

##### Request Body

The following fields must be provided in the request body:

```json
{
	"token": "vjefe7238ou23jonefciohd"
}
```

##### Response Body

This endpoint will return a list of puzzle ratings made by the user as a json object or an array of json objects depending on the number of puzzle ratings made
```json
{
	"puzzleID": 1,
    "name": "XYZ",
    "description": "Cool puzzle",
    "rating": 3
}
```

##### Response Status Codes

| Status Code | Description							                                          |
|-------------|-------------------------------------------------------------------|
| `200`				| Ratings returned																				  |

[Back to Table of Contents](#table-of-contents)

# Puzzles

## Get all puzzles

This endpoint returns a list of all created puzzles

##### HTTP Request

`GET /getAllPuzzles`

##### Request Body
There is nothing send in the request body

##### Response Body

Puzzle details, including name of creator are returned. A single json object or array of object is returned based on number of puzzles currently created.

```json
{
	"puzzleID": 1,
    "name": "XYZ",
    "description": "Cool puzzle",
    "creator": "Jane Doe"
}
```

##### Response Status Codes

| Status Code | Description							                                          |
|-------------|-------------------------------------------------------------------|
| `200`		    | Puzzle list returned																    |
| `500`		    | Server error																    |										               

[Back to Table of Contents](#table-of-contents)

## Get Puzzle By Id

This endpoint returns a specific puzzle.

##### HTTP Request

`GET /getPuzzleByID:id`

##### Request Body

No request body is needed.

##### Response Body
The specified puzzle is returned

```json
{
	"puzzleID": 1,
    "name": "XYZ",
    "description": "Cool puzzle",
    "creator": "Jane Doe"
}
```

##### Response Status Codes

| Status Code | Description							                            |
|-------------|-----------------------------------------------------|
| `200`		    | Puzzle successfully returned								  |
| `500`       | Server error                          |

[Back to Table of Contents](#table-of-contents)

## Get Searched Puzzle

This endpoint retrieves puzzles with names matching the given criteria.

##### HTTP Request

`GET /getSearchedPuzzles`

##### Request Body

No request body needed.

##### Response Body
The endpoint returns a single or list of puzzles matching the criteria searched

```json
[
    {
        "puzzleID": 1,
        "name": "XYZ",
        "description": "Cool puzzle",
        "creator": "Jane Doe"
    },
    {
        "puzzleID": 3,
        "name": "XYZee",
        "description": "Cooleeeeer puzzle",
        "creator": "Janet Doe"
    } 
]
```

##### Response Status Codes

| Status Code | Description							                                          |
|-------------|-------------------------------------------------------------------|
| `200`		    | Puzzles successfully returned		                            |	

[Back to Table of Contents](#table-of-contents)

## Create Puzzle

This endpoint is used when creating a new puzzle.

##### HTTP Request

`POST /createPuzzle`

##### Request Body

The following must be specified.
```json
{
	"name": "ABC",
    "description": "Puzzleeeeee",
    "token": "dxcfjv87uihyihfnjk",
    "puzzleObject": "[{x:3, y:6}, {x:5, y:9}]",
    "puzzleImage": "x.png"
}
```

##### Response Body

This endpoint will not return any fields in the response body.

##### Response Status Codes

| Status Code | Description							                              |
|-------------|-------------------------------------------------------|
| `201`		    | Puzzle created		   						  |
| `505`       | Server error                            |

[Back to Table of Contents](#table-of-contents)

## Get all puzzle ratings

This endpoint gets all puzzle ratings

##### HTTP Request

`GET /getAllPuzzleRatings`

##### Request Body

No request body needed.

##### Response Body

This endpoint will return a list of puzzle ratings.

```json
[
    {
        "puzzleID": 1,
        "name": "XYZ",
        "creator": "Jane Doe",
        "rating": 4,
        "ratedBy": "X"
    },
    {
        "puzzleID": 1,
        "name": "XYZ",
        "creator": "Jane Doe",
        "rating": 3,
        "ratedBy": "Y"
    } 
]
```

| Status Code | Description							                            |
|-------------|-----------------------------------------------------|
| `200`		    | Puzzle Ratings returned							  |
| `500`       | Server error                      |

## Create Puzzle Rating

This endpoint is used when creating a new puzzle rating.

##### HTTP Request

`POST /createPuzzleRating`

##### Request Body

The following must be specified.
```json
{
	"puzzleID": 3,
    "token": "dxcfjv87uihyihfnjk",
    "rating": 3
}
```

##### Response Body

This endpoint will not return any fields in the response body.

##### Response Status Codes

| Status Code | Description							                              |
|-------------|-------------------------------------------------------|
| `201`		    | Puzzle Rating created		   						  |
| `505`       | Server error                            |

[Back to Table of Contents](#table-of-contents)