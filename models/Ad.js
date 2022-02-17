const mongoose = require('mongoose');
const uuid = require('uuid');
const Ad = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        default:uuid.v5(),
        unique:true,
    },
    title: {
        type: String,
        unique:false,
        required: true
    },
    description:{
        type:String,
        required:true,
        unique:false
    },
    createdAt:{
        type:Date,
        default:Date.now        
    },
    image:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'active',
        required:true,
    },
    createdBy:{
        type:String,
        required:true
    },
    visits:{
        type:Number,
        required:true,
        default:0,
    },
    watchlists:{
        type:Number,
        required:true,
        default:0,
    }

})


module.exports = mongoose.model('Ad',Ad);