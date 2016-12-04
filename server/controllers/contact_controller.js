var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = {

	create: function(req,res){
		console.log('inside create controller')
	}, //need to put , between calls or server crashes

	showAll: function(req,res){
		// console.log('inside showAll controller')
	}
}