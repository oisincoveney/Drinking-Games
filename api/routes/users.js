var express = require('express');
var router = express.Router();
let model = require('../models/index');
let User = model.User;

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (e) {
    next(e);
  }
});

router.post('/new', (req, res, next) => {
  // create new user here
})

module.exports = router;
