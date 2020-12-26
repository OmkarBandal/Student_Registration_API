
const express = require('express');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Roll_No :{
        type:Number,
        required:true,
        unique:true
    },
    Name :{
        type:String,
        required:true,
    trim:true
    },
    Gender :{
        type:String,
        required:true,
    },
    City_Name :{
        type:String,
        required:true,
        trim:true
    },
    Contry_Name :{
        type:String,
        required:true,
        trim:true
    }, 
});

const Collection = new mongoose.model("StudentRegistrationAPICollection",schema);

module.exports = Collection;
