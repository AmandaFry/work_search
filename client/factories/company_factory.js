myApp.factory('companyFactory', function($http,$cookies){
	var factory = {};

    factory.create = function(newCo, callback){
    	$http.post('/company/new', newCo).success(function(data){
    		callback();
    	});
    };

    return factory;
});