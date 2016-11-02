myApp.controller('companyController', function ($scope, $location,$routeParams,$cookies,companyFactory){

	//CURRENT USER SECTION - this section to read from session cookie the current user info
	//In user_factory I put/set the current user cookie
	//I call it here an dable to use it
	var currentUser = $cookies.getObject('user');
	//binding the currentUser so you can see it in the front page
	$scope.currentUser = currentUser;

	// //submit button, adding new answer
	// $scope.answerCreate = function(){
	// 	//I can access the newQ.question and newQ.description, I need to add the other informations
	// 	$scope.newA.owner = $scope.currentUser.name;
	// 	$scope.newA.likes = 0;//new question will have no likes yet but I need to create initial setting to 0
	// 	$scope.newA.questionID = questionId;
	// 	//after creating new answer redirect to dashboard and increase answer count by 1
	// 	answerFactory.create($scope.newA, function(){
 //            $location.url('/dashboard');
	// 	})
	// };


	//submit button adding new company
	$scope.createCompany = function(){
		$scope.newCo.owner = $scope.currentUser.name;
		companyFactory.create($scope.newCo, function(){
			$location.url('/company_all');
		});
	};

})