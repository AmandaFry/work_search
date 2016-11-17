myApp.factory('companyFactory', function($http,$cookies){
	var factory = {};

	factory.showAll = function(callback){
		$http.get('/company/all').success(function(data){
			callback(data);
		});
	};

	factory.showOne = function(id, callback){
		console.log('inside showOne factory, the id is:', id)
		$http.get('/company/' + id).success(function(data){
			companyDetail = data;
			callback(companyDetail);
		})
	}

	factory.showOneE = function(id, callback){
		$http.get('/company/' + id).success(function(data){
			companyDetailE = data;
			callback(companyDetailE);
		})
	}

    factory.create = function(newCo, callback){
    	$http.post('/company/new', newCo).success(function(data){
    		callback();
    	});
    };

    return factory;
});