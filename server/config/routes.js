var users = require('../controllers/users_controller.js');
var company = require('../controllers/company_controller.js');
// var contact = require('../controllers/contact_controller.js');

module.exports = function(app){

	app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

	app.post('/company/new', function(req,res){
		company.create(req,res);
	});

	app.get('/company/all',function(req,res){
		company.showAll(req,res);
	});

	app.get('/company/:id', function(req, res){
		// console.log('reached company/id route');
		// console.log('the body is', req.body);
		// console.log('my id is', req.params.id)
		company.showOne(req, res);
	});

	app.get('/contact/all', function(req,res){
		// console.log('reached contact show all route');
		// console.log('the body is', req.body);
		// console.log('my id is', req.params.id)
		contact.showAll(req,res);
	});

	app.post('/contact/new', function(req,res){
		console.log('reached contact new route');
		console.log('the body is', req.body);
		contact.create(req,res);
	})
}