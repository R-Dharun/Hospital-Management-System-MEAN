const { string } = require('joi');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    date: {type: Date, required: true},
    address: {type: String, required: true},
    phone: {type:String,required:true}
 
});


module.exports = mongoose.model('booking', bookSchema);
