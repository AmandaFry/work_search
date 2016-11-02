var users = require('../controllers/users_controller.js');

module.exports = function(app){

	app.post('/users/create', function(req, res) {
        users.create(req, res);
    });

	app.post('/company/new', function(req,res){
		console.log('reached company/new route');
		console.log(req.body);
	});

}