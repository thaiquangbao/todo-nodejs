const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const users = new Schema({
    userName:String,
    passWord:String,
},{
    timestamps:true,
});

module.exports = mongoose.model('Users',users)