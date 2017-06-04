'use strict';

const chalk = require('chalk');
const express = require('express');
const router = new express.Router();
const models = require('../../../db/models');

const PublicMessage = models.PublicMessage;

router.post('/', function(req, res, next){
  PublicMessage.create(req.body)
  .then(createdMessage => {
    console.log(createdMessage);
    res.status(204).end();
  })
  .catch(err => {
    console.error(chalk.red(err));
  });
  res.end();
});

module.exports = router;
