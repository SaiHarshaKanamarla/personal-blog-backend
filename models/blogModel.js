const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({    
    title :{
        type: String,
        required : true,
        trim: true,
    },
    author :{
        type : String,
        required : true,        
        trim: true
    },
    body:{
        type: String,
        required: true,
        trim: true        
    }    
},{collection : 'blogs'})

const blogModel = mongoose.model('blogs',blogSchema);

module.exports = blogModel;