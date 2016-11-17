myApp.controller('companyController', function ($scope,$rootScope, $location,$routeParams,$cookies,companyFactory){

	//CURRENT USER SECTION - this section to read from session cookie the current user info
	//In user_factory I put/set the current user cookie - I call it here an dable to use it
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;

	//this runs for company all page
	companyFactory.showAll(function(data){
		$scope.companies = data;
	})

 	//this section for showing one company
	//Able to capture ID from URL
	// var companyId = $routeParams.id;
	// companyFactory.showOne(companyId, function(data){
	// 	$scope.companyDetail = data;
	// 	console.log(data);
	// 	$location.url('/company/' + companyId)
	// })

	//the two-way binding is not working it brings back all the data, but will not show it on the company page
	$scope.showCompany = function(companyObj){
		console.log('inside show company controller', companyObj)
		var companyId = companyObj._id;
		console.log('the id is', companyId)
		companyFactory.showOne(companyId, function(data){
			$rootScope.companyDetail = data;
			console.log('show company that was returned from server', $rootScope.companyDetail);
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
	//immideatly redirect to company deatial page
 	$scope.editCompany = function(){
 		var companyId = $routeParams.id;
 		companyFactory.showOneE(companyId, function(data){
			$rootScope.companyDetailE = data;
			console.log('edit data', data);
			$location.url('/company_edit/' + companyId)
		})
 	}



})