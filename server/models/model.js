// require mongoose
var mongoose = require('mongoose');

//USER SECTION
//create the user schema
var userSchema = new mongoose.Schema({
	//validation, the filed cannot be empty and at least 2 character long in string format
	name: {type:String, required:true, minlength:2}
},{timestamps: true});

//Here where I create Users table
var Users = mongoose.model('Users', userSchema);

//COMPANY SECTION
//create the company schema
var companySchema = new mongoose.Schema({
	owner: {type:String, required:true},
	name: {type:String, required:true, minlength:2},
	type: {type: String},
	location: {type:String},
	website: {type:String},
	address: {type:String},
	main_number: {type:String},
	how_found: {type:String},
	size: {type:String},
	glassdoor_score: {type:String},
	google_score: {type:String},
	rating: {type: Number},
	got_me_work: {type: String},
	notes: {type: String},
}, {timestamps: true});

//creating the Compnay table
var Company = mongoose.model('Company', companySchema);