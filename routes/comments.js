var express = require('express');
var commentRouter = express.Router();
const CryptoJS = require("crypto-js");
const Comment = require('../models/comments');

commentRouter.use(express.json());
/* GET users listing. */
commentRouter.route('/', function(req, res, next) {
  res.send('You cannot have all my comments.');
}).post((req, res, next) => {
    Comment.create(req.body)
    .then(comment => {
        console.log('comment created ', comment);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(comment);
    })
    .catch(err => next(err));
})

commentRouter.route('/:comment')
.get((req, res, next) => {
    commentStore.findOne({"title":req.params.comment})
    .then(comment => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(comment);
    })
    .catch(err => next(err));
})

module.exports = commentRouter;