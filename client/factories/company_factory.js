myApp.factory('companyFactory', function($http,$cookies){
	var factory = {};

	factory.showAll = function(callback){
		$http.get('/company/all').success(function(data){
			callback(data);
		});
	};

	factory.showOne = function(id, callback){
		$http.get('/company/' + id).success(function(data){
			companyDetail = data;
			callback(companyDetail);
		})
	}

    factory.create = function(newCo, callback){
    	$http.post('/company/new', newCo).success(function(data){
    		callback();
    	});
    };

    return factory;
});