var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var Company = mongoose.model('Company');

module.exports = {
	create: function(req, res){
		var company = new Company(req.body)
		company.save(function(err){
			if(err)
				console.log(err);
			else{
				Company.findOne({}, function(err,data){
					if(err)
						console.log(err)
					else{
						res.json(data);
					}
				}).sort({_id: -1});
			}
		})

	},

	showAll: function(req,res){
		Company.find({}, function(err, data){
			if(err)
				console.log(err);
			else
				res.json(data);
		})
	},

	showOne: function(req,res){
		Company.findOne({_id: req.params.id}, function(err, data){
			if(err)
				console.log(err);
			else
				res.json(data);
		})
	}

}