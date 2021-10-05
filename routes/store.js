var express = require('express');
var keyRouter = express.Router();
const KeyStore = require('../models/keys');

keyRouter.use(express.json());
/* GET users listing. */
keyRouter.route('/', function(req, res, next) {
  res.send('You cannot have all my keys.');
}).post((req, res, next) => {
    console.log(`logging body ${req.body}`)
    KeyStore.create(req.body)
    .then(key => {
        console.log('key created ', key);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(key);
    })
    .catch(err => next(err));
})

/* Todo: POST Route to add key in to DB */

module.exports = keyRouter;