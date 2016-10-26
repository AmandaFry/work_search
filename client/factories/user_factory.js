myApp.factory('userFactory', function($http,$cookies){
	var factory = {};

	factory.create = function(newUser,callback){
        //This connecting to server /config/routes.js
        $http.post('/users/create',newUser).success(function(data){
            //once the data comes back I put it in the session under key word of "user"
            $cookies.putObject('user', data)
            callback();
        });
    };

    return factory;
});