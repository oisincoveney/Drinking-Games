let express = require("express");
let router = express.Router();
let models = require("../models/index");
const Rule = models.Rule;

router.get("/", function (req, res, next) {

        Rule.findAll().then(data => {
            res.send(data);
            next();
        }, e => {
            res.send(e);
            next();
        });
    }
);
module.exports = router;
