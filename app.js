
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan'); 
const cors = require('cors');
require('dotenv').config();
const app = express();


let port = process.env.PORT || '3000';

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
//mongo db connection here for now
const url = 'mongodb://localhost:27017/keyStore';
const connect = mongoose.connect(process.env.MONGODB_URI || url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to MongoDB'),
    err => console.log(err)
);
/**
 * ToDo
 * Update routers to use modularity
 * */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const keyRouter = require('./routes/store');
const commentRouter = require('./routes/comments');



app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
/**
 * Future endpoint for login to the dash board
 */
app.use('/users', usersRouter);
app.use('/store', keyRouter);
app.use('/comments', commentRouter);


app.listen(port,()=>{
  console.log(`app available here: http://localhost:${port}`)
});


