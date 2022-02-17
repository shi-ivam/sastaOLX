const mongoose = require('mongoose');
const uuid = require('uuid');


const Watchlist = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        default:uuid.v5(),
        unique:true,
    },
    creator:{
        type:String,
        required:true
    },
    on:{
        type:String,
        required:true
    },
    createdAt:{type:Date,default:Date.now},

})


module.exports = mongoose.model('Watchlist',Watchlist);