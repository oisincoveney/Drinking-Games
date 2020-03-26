let express = require("express");
let router = express.Router();
let model = require('../models/index');
let Rule = model.Rule

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
