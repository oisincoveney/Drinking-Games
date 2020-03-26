let express = require("express");
let router = express.Router();
let models = require('../models/index')
let Game = models.Game


/**
 * Given a game ID, get the game information
 */
router.get("/game/:gameID", (req, res, next) => {
    
})


/**
 * Create a new game and return the gameID
 */
router.post("/new", (req, res, next) => {
});

module.exports = router;
