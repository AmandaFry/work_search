var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = {

	//create a new user
	create: function(req, res){
		//check to see if the user exists
		Users.findOne({name: req.body.name}, function(err, data){
			if(err)
				console.log(err);
			else{ 
				if(data){
					res.json(data);
				}
				//if the user does not exists create a new one
				else{
					var user = new Users(req.body)
					user.save(function(err){
						if(err)
							conole.log(err);
						else{
							Users.findOne({}, function(err,data){
								if(err)
									console.log(err)
								else{
									res.json(data);
								}

							}).sort({_id: -1});
						};

					});
				};
			};
		});
	},

	//sbring back all the users from db
	show: function(req, res){
		Users.find({}, function(err,data){
			if(err)
				console.log(err);
			else
				res.json(data);

		});
	},

	//bring back just one user from the db
	showOne: function(req, res){
		Users.findOne({_id:req.params.id}, function(err, data){
			if(err)
				console.log(err);
			else
				res.json(data);
		});
	},

	

}