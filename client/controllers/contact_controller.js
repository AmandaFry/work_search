myApp.controller('contactController', function ($scope,$rootScope,$location,$routeParams,$cookies,contactFactory){

	//CURRENT USER SECTION - this section to read from session cookie the current user info
	//In user_factory I put/set the current user cookie - I call it here an dable to use it
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;

	//fill in the contact all page
	contactFactory.showAll(function(data){
		$scope.contacts = data;
	})

	//create a new contact
	$scope.createContact = function(){
		$scope.newC.owner = $scope.currentUser.name;
		contactFactory.create($scope.newC, function(){
			$location.url('/contact_all');
		})
	}


})