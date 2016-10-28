myApp.controller('loginController', function ($scope, $location,$routeParams,$cookies,userFactory){
	//when redicerted to '/' page lets remove session
	$cookies.remove('user')

	$scope.login = function(){
        userFactory.create($scope.newUser,function(){
            $location.url('/dashboard');
        });
	};

});