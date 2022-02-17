const mongoose = require('mongoose');
const uuid = require('uuid');


const User = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        default:uuid.v5(),
        unique:true,
    },
    firstName:{
        type:String,
        required:true,
    }
    ,
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:false,

    }
    ,
    profileImage:{
        type:String,
        required:false,
    },
    createdAt:{type:Date,default:Date.now},
    password:{
        type:String,
        required:true,

    },

})


module.exports = mongoose.model('User',User);