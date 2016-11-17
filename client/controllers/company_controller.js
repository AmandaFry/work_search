myApp.controller('companyController', function ($scope,$rootScope,$location,$routeParams,$cookies,companyFactory){

	//CURRENT USER SECTION - this section to read from session cookie the current user info
	//In user_factory I put/set the current user cookie - I call it here an dable to use it
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;

	//this runs for company all page
	companyFactory.showAll(function(data){
		$scope.companies = data;
	})

	//I had to implement $rootScope for the next page to see the returned value
	$scope.showCompany = function(companyObj){
		//In the showCompnay click I pass the company object and pulling the id from there
		var companyId = companyObj._id;
		companyFactory.showOne(companyId, function(data){
			$rootScope.companyDetail = data;
			$location.url('/company/' + companyId)
		})
	}

	//submit button adding new company
	$scope.createCompany = function(){
		$scope.newCo.owner = $scope.currentUser.name;
		companyFactory.create($scope.newCo, function(){
			$location.url('/company_all');
		});
	}

	//when want to edit the company informaiton need to read in the data first
 	$scope.editCompany = function(){
 		//I am using the URL for id
 		var companyId = $routeParams.id;
 		companyFactory.showOne(companyId, function(data){
			$rootScope.companyDetailE = data;
			console.log('edit data left in to work on it later', data);
			$location.url('/company_edit/' + companyId)
		})
 	}



})