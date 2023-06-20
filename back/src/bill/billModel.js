const { string } = require('joi');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billSchema = new Schema({

    treatment: {type: String, required: true},
    Drugadministered:{type:String,require:true},
    date: {type: Date, required: true, },
    Bill: {type: String, required: true},
    status: {type: String, required: true},
 
 
});


module.exports = mongoose.model('bill', billSchema);
