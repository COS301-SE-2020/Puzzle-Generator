const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Str = require('@supercharge/strings');
const bcrypt = require('bcrypt');
const PuzzleRating = require('../models/PuzzleRating');
const Puzzle = require('../models/Puzzle');

//get all users
router.get('/getAllUsers', (request, response) => {
    User.findAll({
      order: [
           ['id', 'DESC'],
       ],
    })
        .then( users => {
            response.status(200).send(users);
        })
        .catch( error => {
            response.status(403).send("Failed due to: ", error);
        })
});


router.delete('/deleteUser/:userID', (request, response) => {
    const userID = request.params.userID; //req.params.userid
    User.destroy( { returning: true, raw: true, plain: true, where: { id:  userID } }
    )
    .then( () => {
        response.status(200).send("Successfully deleted");
     })
    .catch( error => {
        response.status(500).send("Server error");
    } );
});


router.get('/getAllPuzzles', (request, response) => {
    var puzzleJsonObject = [];
    var puzzlePlaceholder = {};
    var index = 0;
    Puzzle.findAll({ raw: true, include: User})
        .then( puzzles => {
            var array = puzzles;
            var totalNumPuzzles = Object.keys(puzzles).length;
            array.forEach(element => {
                puzzlePlaceholder = {
                    "id":element.id,
                    "name":element.name,
                    "description": element.description,
                    "puzzleObject": element.puzzleObject,
                    "image": element.image,
                    "createdAt": element.createdAt,
                    "shared":element.shared,
                    "creator": element['testUser.name']
                };
                ++index;
                puzzleJsonObject.push(puzzlePlaceholder);
                if(index == totalNumPuzzles){
                    response.status(201).send(puzzleJsonObject);
                }
            });
        })
        .catch( error => {
            response.status(500).send("Failed to get all puzzles due to: ", error)
        });
});


router.delete('/deletePuzzle/:puzzleID', (request, response) => {
    const puzzleID = request.params.puzzleID;
    Puzzle.destroy( { returning: true, raw: true, plain: true, where: { id:  puzzleID } }
    )
    .then( () => {
        response.status(200).send("Successfully deleted");
     })
    .catch( error => {
        response.status(500).send("Server error");
    } );
})





module.exports = router;
