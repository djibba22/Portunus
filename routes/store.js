var express = require('express');
var keyRouter = express.Router();
const CryptoJS = require("crypto-js");
const KeyStore = require('../models/keys');

keyRouter.use(express.json());
/* GET users listing. */
keyRouter.route('/', function(req, res, next) {
  res.send('You cannot have all my keys.');
}).post((req, res, next) => {
    KeyStore.create(req.body)
    .then(key => {
        console.log('key created ', key);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        /**Remove these lines for production */
        var bytes  = CryptoJS.AES.decrypt(key.apiKey, process.env.SECRET_STRING);
        var originalKey = bytes.toString(CryptoJS.enc.Utf8);
        console.log("Original Key", originalKey);
        key.apiKey = originalKey
        res.json(key);
    })
    .catch(err => next(err));
})

keyRouter.route('/:key')
.get((req, res, next) => {
    KeyStore.findOne({"name":req.params.key})
    .then(key => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        var bytes  = CryptoJS.AES.decrypt(key.apiKey, process.env.SECRET_STRING);
        var originalKey = bytes.toString(CryptoJS.enc.Utf8);
        console.log("Original Key", originalKey);
        key.apiKey = originalKey
        res.json(key);
    })
    .catch(err => next(err));
})

module.exports = keyRouter;