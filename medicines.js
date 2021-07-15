const mongoose = require('mongoose');
let userSchema= new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Name:String,
    Composition:String,
    Usage:String
});

module.exports = mongoose.model('medicines',userSchema);