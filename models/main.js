var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var main = new Schema({
	title: String,
	description: String
})

module.exports= mongoose.model('main', main)