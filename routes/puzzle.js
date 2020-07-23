var express = require('express');
var router = express.Router();

//let pool = require("./pool");
//puzzle creation endpoint
router.post('/createPuzzle', (request, response) => {
    const userToken = request.body.token;
    const puzzleName = request.body.name;
    var currentUserId = null;

    pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
        if(error){
            response.status(500).send("Server error: " + error.message );
        }
        else
        {
            if(results.rowCount >= 1)
            {
                currentUserId = results.rows[0].userId;
                pool.query('INSERT INTO public."puzzle"("name", "creatorID") VALUES ($1,$2) ', [puzzleName, currentUserId], (error, res) => {
                    if(error)
                    {
                        response.status(500).send("Server error: " + error.message );
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
router.post('/createPuzzleRating', (request, response) => {
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
            response.status(500).send("Server error: " + error.message );
        }
        else
        {
            if(results.rowCount >= 1)
            {
                currentUserId = results.rows[0].userId;
                pool.query('INSERT INTO public."puzzleRating"("rating", "puzzleId", "userId") VALUES ($1,$2,$3) ', [newRating,selectedPuzzlePuzzleId, currentUserId], (error, res) => {
                    if(error)
                    {
                        response.status(500).send("Server error: " + error.message );
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



module.exports = router;
