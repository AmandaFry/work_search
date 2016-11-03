var users = require('../controllers/users_controller.js');
var company = require('../controllers/company_controller.js')

module.exports = function(app){

	app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

	app.post('/company/new', function(req,res){
		// console.log(req.body);
		company.create(req,res);
	});

	app.get('/company/all',function(req,res){
		company.showAll(req,res);
	})

	app.get('/company/:id', function(req, res){
		console.log('reached company/id route');
		console.log(req.body);
		console.log(req.params.id)
		company.showOne(req, res);
	})
}