myApp.factory('companyFactory', function($http,$cookies){
	var factory = {};

	factory.showAll = function(callback){
		$http.get('/company/all').success(function(data){
			callback(data);
		});
	};

    factory.create = function(newCo, callback){
    	$http.post('/company/new', newCo).success(function(data){
    		callback();
    	});
    };

	factory.showOne = function(id, callback){
		$http.get('/company/' + id).success(function(data){
			companyDetail = data;
			callback(companyDetail);
		});
	};

	factory.updateCompany = function(newCo){
		console.log('i got to update factory, the update value to be is:', newCo);
		$http.post('/company/update').sucess(function(data){
			callback();
		});
	}

    return factory;
});