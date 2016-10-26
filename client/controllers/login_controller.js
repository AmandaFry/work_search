myApp.controller('loginController', function (userFactory,$scope, $location,$routeParams,$cookies){
	//when redicerted to '/' page lets remove session
	$cookies.remove('user')

	$scope.login = function(){
        userFactory.create($scope.newUser,function(){
            $location.url('/dashboard');
        });
	};

});