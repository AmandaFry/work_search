myApp.controller('companyController', function ($scope, $location,$routeParams,$cookies,companyFactory){

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
	var companyId = $routeParams.id;
	companyFactory.showOne(companyId, function(data){
		$scope.companyDetail = data;
		console.log(data);
		$location.url('/company/' + companyId)
	})

	//submit button adding new company
	$scope.createCompany = function(){
		$scope.newCo.owner = $scope.currentUser.name;
		companyFactory.create($scope.newCo, function(){
			$location.url('/company_all');
		});
	};


})