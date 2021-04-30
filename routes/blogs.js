const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const blogModel = require('../models/blogModel');
const cors = require('cors');
const e = require('express');

router.use(cors());

router.get('/blogs',(req,res)=>{  
    blogModel.find({})
    .then((data)=>{
        //console.log("harsha");
        //console.log(data);
        res.status(200).send(data);
    })
    .catch((err)=>{
        //console.log(err);
        res.status(500).send(err);
    })
});

router.get('/blogs/:id',(req,res)=>{
    const _id = req.params.id;
    blogModel.findById(_id,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
})

router.post('/blogs',async (req,res)=>{
    console.log("inside post");
    console.log(req.body);
    blogInfo = new blogModel({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author
    });

    await blogInfo.save();
    res.send(blogInfo);
})  

router.delete('/blogs/:id',(req,res)=>{
    var id = req.params.id;
    console.log(id);
    // blogModel.findOneAndDelete(id,(err,result)=>{
    //     console.log("inside delete");        
    //     if(err){
    //         res.status(404).send(err);
    //     }else{
    //         const response = {
    //             message: "BLog successfully deleted",
    //             id: result._id
    //         };
    //         return res.status(200).send(response);
    //     }
    // })
    blogModel.findByIdAndDelete(id).then((result)=>{
        if(!result){
            return res.status(404).send();
        }
        res.send(result);
    })
});

module.exports = router;