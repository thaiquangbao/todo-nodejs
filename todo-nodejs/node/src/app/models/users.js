const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const user = new Schema({
    userName:String,
    passWord:String,
},{
    timestamps:true,
});

module.exports = mongoose.model('User',user)