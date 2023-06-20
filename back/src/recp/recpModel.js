const { string } = require('joi');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recpSchema = new Schema({

    name: {type: String, required: true},
    phone:{type:String,require:true},
    location: {type: String, required: true, },
    roomadmitted: {type: String, required: true},
    admissionno: {type: String, required: true},
    status: {type:String,required:true},
    diagonosis: {type:String,required:true},
 
});


module.exports = mongoose.model('reception', recpSchema);
