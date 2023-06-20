const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const task = new Schema({
    
    name : String ,
    description:String,
    isComplete : Boolean,
    isImportant : Boolean,
    dateTime : {type:Date,default:Date.now},
    user_id:{type:Object }
},{
    
    timestamps:true,
})

module.exports = mongoose.model('Task',task);