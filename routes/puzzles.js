const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const db = require('../config/dbConfig');
const User = require('../models/User');
const Puzzle = require('../models/Puzzle');
const PuzzleRating = require('../models/PuzzleRating')
const Sequelize = require('sequelize');
const SolveAttempt = require('../models/SolveAttempt');
const Op = Sequelize.Op;

/**
 * Note to self: Forgot to set on delete/update cascade to foreign keys. Please do so on final table in Postgres
 */

//get all puzzles

router.get('/getAllPuzzles', (request, response) => {
    var puzzleJsonObject = [];
    var puzzlePlaceholder = {};
    var index = 0;
    Puzzle.findAll({ raw: true, where: { shared: true }, include: User})
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

//get puzzles fitting searchbar criteria
router.get('/getSearchedPuzzles/:term', (request, response) => {
    const term = request.params.term;
    Puzzle.findAll( { raw: true, where: { name: {[Op.iLike]:  '%' + term + '%' } } } )
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
    const shared = request.body.shared;
    const image = request.body.image;
    let creatorID = null;
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
    .then( user => {
        creatorID = user[0].id;

        //console.log(name, description, puzzleObject, creatorID, shared, image);

        Puzzle.create({
            name, description, puzzleObject, creatorID, shared, image
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

//share puzzle
router.put('/sharePuzzle',(request, response) => {
    const puzzleID = request.body.puzzleID;
    Puzzle.update(
        { shared: true },
        { returning: true, raw: true, plain: true, where: { id:  puzzleID } }
    )
    .then( () => {
        response.status(200).send("Successfully shared");
     })
    .catch( error => {
        response.status(500).send("Server error");
    } );
});

//stop sharing puzzle
router.put('/stopSharingPuzzle',(request, response) => {
    const puzzleID = request.body.puzzleID;
    Puzzle.update(
        { shared: false },
        { returning: true, raw: true, plain: true, where: { id:  puzzleID } }
    )
    .then( () => {
        response.status(200).send("Successfully shared");
     })
    .catch( error => {
        response.status(500).send("Server error");
    } );
});

//start of solving endpoints
//new solve attempt record
router.post('/newSolveAttempt', (request, response) => {
    console.log("the body *---> ", request.body);
    const token = request.body.token;
    const puzzleID = request.body.puzzleID;
    let solved = request.body.solved;
    const attemptDuration = request.body.attemptDuration;
    let attempted = true;
    let solverID = null;
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
    .then( user => {
        solverID = user[0].id;
        console.log("Just before creation to check values to be inserted: ", solverID, puzzleID, attemptDuration, solved, attempted);

        SolveAttempt.findAll({ raw: true,
            where: { solverID:  solverID, puzzleID:  puzzleID }
          })
          .then( data => {
              if(data.length == 0){ //solve attempt doesnt exist so create new rating
                    SolveAttempt.create({
                        solverID, puzzleID, attemptDuration, solved, attempted
                    })
                    .then( () => {
                        response.status(200).send("Attempt successfully created")
                    })
                    .catch( error => {
                        response.status(403).send("Solve attempt creation failed due to: ", error);
                    })
                }
                else
                {
                    let newAttemptDuration = parseInt(data[0].attemptDuration) + parseInt(attemptDuration);
                    if(data[0].solved == true){solved = data[0].solved; }
                    else {solved = request.body.solved; }
                    SolveAttempt.update( //solve attempt exists so update current rating
                        { solved: solved, attemptDuration: newAttemptDuration },
                        { returning: true, raw: true, plain: true, where: { solverID: solverID, puzzleID:  puzzleID } }
                    )
                    .then( () => {
                        response.status(200).send("Solve attempt successfully updated");
                     })
                    .catch( error => {
                        response.status(500).send("Server error");
                    } );
                }
            })
            .catch(error => {
                response.status(403).send("Attempt record not found due to: ", error);
            });
    })
    .catch(error => {
        response.status(403).send("User not found due to: ", error);
    });
});
//end of solving endpoints

//deletePuzzle
router.delete('/deletePuzzle/:puzzleID', (request, response) => {
    const puzzleID = request.params.puzzleID; //req.params.userid
    console.log("---> ", request.params);
    Puzzle.destroy( { returning: true, raw: true, plain: true, where: { id:  puzzleID } }
    )
    .then( () => {
        console.log("Worx---> ");
        response.status(200).send("Successfully deleted");
     })
    .catch( error => {
        console.log("No bueno---> ");
        response.status(500).send("Server error");
    } );
})

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

        PuzzleRating.findAll({ raw: true,
            where: { userID:  userID, puzzleID:  puzzleID }
          })
          .then( data => {
              if(data.length == 0){ //rating doesnt exist so create new rating
                PuzzleRating.create({
                      rating, puzzleID, userID
                    })
                    .then( () => {
                        response.status(200).send("Puzzle rating successfully created")
                    })
                    .catch( error => {
                        response.status(403).send("Puzzle rating creation failed due to: ", error);
                    });
                }
                else
                {
                    PuzzleRating.update( //rating exists so update current rating
                        { rating: rating },
                        { returning: true, raw: true, plain: true, where: { userID:  userID, puzzleID:  puzzleID } }
                    )
                    .then( () => {
                        response.status(200).send("Puzzle rating successfully updated");
                     })
                    .catch( error => {
                        response.status(500).send("Server error");
                    } );
                }
            })
          .catch( error => { response.status(500).send("Error: ", error); })
    })
    .catch(error => {
        response.status(403).send("User not found due to: ", error);
    });

});

router.post('/findRatingID', (request, response) => {
    const puzzleID = request.body.puzzleID;
    const userID = null;

    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
    .then( user => {
        PuzzleRating.findAll( { returning: true, raw: true, plain: true, where: { puzzleID:  puzzleID, userID: user[0].id} }
        )
        .then( data => {
          const rateID = {
            id: data["id"]
          }

          console.log("Works");
          response.status(200).send(rateID);
        })
        .catch( error => {
          console.log("Not working");
          response.status(500).send("Server error");
        });

      })
      .catch(error => {
          response.status(403).send("User not found due to: ", error);
      });

    });


    router.delete('/deleteRating/:rateID', (request, response) => {
        const rateID = request.params.rateID; //req.params.userid
        PuzzleRating.destroy( { returning: true, raw: true, plain: true, where: { id:  rateID } }
        )
        .then( () => {
            console.log("Worx");
            response.status(200).send("Successfully deleted");
         })
        .catch( error => {
            console.log("Server error");
            response.status(500).send("Server error");
        } );
    })



module.exports = router;
