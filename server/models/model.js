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
	contact: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contact'}],
}, {timestamps: true});

//creating the Company table
var Company = mongoose.model('Company', companySchema);


//CONTACT SECTION
var contactSchema = new mongoose.Schema({
	owner: {type:String, required:true},
	first_name: {type:String, require:true},
	last_name: {type:String, required:true},
	// company: {type:String, required: true},//needs to be thigth to company
	//creating an association 
	_company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},//needs to be thigth to company
	work_email: {type:String},
	personal_email: {type:String},
	cell_number: {type:String},
	work_number: {type:String},
	other_number: {type:String},
	linkedin: {type:String},
	how_contact: {type:String},
	when_contact: {type:Date},
	last_contact: {type:Date},
	rating: {type:Number},
	got_me_work: {type:String},
	notes: {type:String},
}, {timestamps:true});

//creating the Contact table

var Contact = mongoose.model('Contact', contactSchema);