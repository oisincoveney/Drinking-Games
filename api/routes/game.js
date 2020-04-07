let express = require("express");
let router = express.Router();
let models = require('../models/index')
let Game = models.Game
let User = models.User
let GameUser = models.GameUser
let CardHandler = require('../helpers/card-handler')


/**
 * Given a game ID, get the game information
 */
router.get("/:gameID", async (req, res, next) => {
    let game = await Game.findOne({
        where: {
            id: req.params.gameID
        }
    });
    res.send(game);
});


/**
 * Create a new game and return the gameID
 */
router.post("/new", async (req, res, next) => {
    let game = await Game.create({
        name: req.body.name,
        gameID: (new Date()).toString(),
        nextCard: 0,
        cardOrder: CardHandler.randomDeck(),
        gameRuleSet: 1,
        numCards: 52,
        numUsers: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    let user = await User.create({
        name: req.body.userName,
        favoriteDrink: req.body.userFavoriteDrink,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    await GameUser.create({
        UserId: user.id,
        GameId: game.id,
        userConfirmed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserOrder: 0,
    });
    res.send(game);
});

router.post("/join/:gameID", async (req, res, next) => {
    let game = await Game.findOne({
        where: {
            id: req.params.gameID
        }
    });
    game.numUsers += 1;
    let user = await User.create({
        name: req.body.userName,
        favoriteDrink: req.body.userFavoriteDrink,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    await GameUser.create({
        UserId: user.id,
        GameId: game.id,
        userConfirmed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserOrder: game.numUsers
    });
});

router.get("/:GameId/checkNext", async (req, res, next) => {
    let game = await Game.findOne({
        where: {
            id: req.params.GameId
        }
    });
    console.log(game)
    let usersReady = await GameUser.count({
        where: {
            GameId: req.params.GameId,
            userConfirmed: true
        }
    });
    console.log(usersReady)
    if (usersReady === game.numUsers) {
        res.send(game)
    } else {
        res.send({
            isReady: usersReady === game.numUsers,
            usersRemaining: game.numUsers - usersReady
        });
    }
});

router.put('/:GameId/confirm/:UserId', async (req, res, next) => {
    let gameUser = await GameUser.findOne({
        where: {
            GameId: req.params.GameId,
            UserId: req.params.UserId,
        }
    });

    gameUser.userConfirmed = true;
    await gameUser.save({fields: ['userConfirmed']});
    res.json({
        confirmed: true
    })
});
module.exports = router;



