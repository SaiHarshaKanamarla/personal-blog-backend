const express = require('express');
var app = express();
const blogRouter = require('./routes/blogs');
const mongoose  = require('mongoose');
var port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());


var url = 'mongodb+srv://vishal:visky123@mflix.e8gys.mongodb.net/blogs?retryWrites=true&w=majority';

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use(blogRouter);  

app.listen(port);