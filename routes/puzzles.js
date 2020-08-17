const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const db = require('../config/dbConfig');
const User = require('../models/User');
const Puzzle = require('../models/Puzzle');
const PuzzleRating = require('../models/PuzzleRating')
const Sequelize = require('sequelize');
const e = require('express');
const Op = Sequelize.Op;

/**
 * Note to self: Forgot to set on delete/update cascade to foreign keys. Please do so on final table in Postgres
 */

//get all puzzles
router.get('/getAllPuzzles', (request, response) => {
    var puzzleJsonObject = [];
    var puzzlePlaceholder = {};
    var index = 0;
    Puzzle.findAll()
        .then( puzzles => {
            var array = puzzles;
            var totalNumPuzzles = Object.keys(puzzles).length;
            //console.log(array);
           // response.status(201).send(puzzles);
            array.forEach(element => {
                User.findAll({ raw: true, where: {id: element.creatorID }})
                .then( data => {
                    //console.log("--- ", data[0].name);
                    //console.log("** ", array[count].creatorID);
                    puzzlePlaceholder = {
                        "id":array[index].id,
                        "name":array[index].name,
                        "description":array[index].description,
                        "puzzleObject":array[index].puzzleObject,
                        "createdAt":array[index].createdAt,
                        "creator":data[0].name
                    };
                    ++index;
                    puzzleJsonObject.push(puzzlePlaceholder);
                    if(index == totalNumPuzzles){
                        response.status(201).send(puzzleJsonObject);
                    }
                })
                .catch( error => { console.log("Error: ", error);});
            });
        })
        .catch( error => {
            console.log("Failed to get all puzzles due to: ", error)
        });
});

//get puzzle by id
router.get('/getPuzzleByID/:id', (request, response) => {
    const theID = parseInt(request.params.id);
    Puzzle.findAll( { raw: true, where: { id: theID } } )
        .then( puzzle => {
            response.status(201).send(puzzle);
        })
        .catch( error => {
            response.status(403).send("Failed due to: ", error);
        })
});

//create a new puzzle entry into the db
router.post('/createPuzzle', (request, response) => {
    const name = request.body.name;
    const description = request.body.description;
    const puzzleObject = request.body.puzzleObject;
    let creatorID = null;
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
    .then( user => {
        creatorID = user[0].id;

        Puzzle.create({
            name, description, puzzleObject, creatorID
        })
        .then( () => {
            response.status(200).send("Puzzle successfully saved")
        })
        .catch( error => {
            response.status(403).send("Puzzle creation failed due to: ", error);
        })
    })
    .catch(error => {
        response.status(403).send("User not found due to: ", error);
    });
});

/**
 * Puzzle Ratings Endpoints
 *  */
//get all puzzle ratings
router.get('/getAllPuzzleRatings', (request, response) => {
    PuzzleRating.findAll()
        .then( puzzleRatings => {
            response.status(200).send(puzzleRatings);
        })
        .catch( error => {
            response.status(403).send("Failed due to: ", error);
        })
});

//create a new rating
router.post('/createPuzzleRating', (request, response) => {
    const rating = request.body.rating;
    const puzzleID = request.body.puzzleID;
    let userID = null;
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
    .then( user => {
        userID = user[0].id;

        PuzzleRating.create({
            rating, puzzleID, userID
        })
        .then( () => {
            response.status(200).send("Puzzle rating successfully created")
        })
        .catch( error => {
            response.status(403).send("Puzzle rating creation failed due to: ", error);
        });
    })
    .catch(error => {
        response.status(403).send("User not found due to: ", error);
    });

});


module.exports = router;
