let express = require("express");
let router = express.Router();
let model = require('../models/index');
let Rule = model.Rule

/**
 * Create new rule set and post form data
 */
router.post('/new', () => { })

/**
 * Get a rule set with the id
 */
router.get('/:ruleSetID', () => { });


/**
 * 
 */
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
