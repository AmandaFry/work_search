myApp.factory('contactFactory', function($http,$cookies){
	var factory = {};

    factory.showAll = function(callback){
    	console.log('inside contact show all factory');
    	$http.get('/contact/all').success(function(data){
    		callback(data);
    	});
    };

    factory.create = function(newC, callback){
    	console.log('the newC info', newC)
    	$http.post('/contact/new', newC).success(function(data){
    		callback();
    	});
    };



    return factory;
});