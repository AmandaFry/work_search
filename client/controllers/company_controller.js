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


	//submit button adding new company
	$scope.createCompany = function(){
		$scope.newCo.owner = $scope.currentUser.name;
		companyFactory.create($scope.newCo, function(){
			$location.url('/company_all');
		});
	}

	//I had to implement $rootScope for the next page to see the returned value
	$scope.showCompany = function(companyObj){
		//In the showCompnay click I pass the company object and pulling the id from there
		var companyId = companyObj._id;
		companyFactory.showOne(companyId, function(data){
			$rootScope.companyDetail = data;
			$location.url('/company/' + companyId)
		})
	}

 	$scope.editCompany = function(){
 		//I am using the URL for id
 		var companyId = $routeParams.id;
 		companyFactory.showOne(companyId, function(data){
 			//LESON: I had a bug when I was trying to use value, 
 			//but I just needed to put it inside ng-model in that case no need ot recreate new value.
 			// $rootScope.companyDetailE = data;
			$rootScope.newCo = data;
			$location.url('/company_edit/' + companyId)
		})
 	}

 	$scope.updateCompany = function(updateData){
 		companyFactory.updateCompany(updateData, function(data){
 			$location.url('/company/' + companyId)
 		});
 	}

})