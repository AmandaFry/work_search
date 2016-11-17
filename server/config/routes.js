var users = require('../controllers/users_controller.js');
var company = require('../controllers/company_controller.js')

module.exports = function(app){

	app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

	app.post('/company/new', function(req,res){
		company.create(req,res);
	});

	app.get('/company/all',function(req,res){
		company.showAll(req,res);
	})

	app.get('/company/:id', function(req, res){
		console.log('reached company/id route');
		console.log('the body is', req.body);
		console.log('my id is', req.params.id)
		company.showOne(req, res);
	})
}