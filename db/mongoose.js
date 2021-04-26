const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vishal:visky123@mflix.e8gys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex : true
});