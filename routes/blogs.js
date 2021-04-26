const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const blogModel = require('../models/blogModel');
const cors = require('cors');

router.use(cors());

router.get('/',(req,res)=>{  
    blogModel.find({})
    .then((data)=>{
        console.log("harsha");
        console.log(data);
        res.status(200).send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.status(404).send(err);
    })
});

module.exports = router;