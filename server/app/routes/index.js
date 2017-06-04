'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/submitMessage', require('./submitMessage'));


router.use(function(req, res) {
  res.status(404).end();
});
