// var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'ngCookies', 'ui.bootstrap']); //global value now
var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'ngCookies']); //global value now

//this is how to navigate between partials
myApp.config(function ($routeProvider){
	$routeProvider
    .when('/',{
        templateUrl: 'partials/login.html',
        controller: 'loginController',
    })
    
    .when('/dashboard',{
    	templateUrl: 'partials/dashboard.html',
    	controller: 'dashboardController',
    })

    .when('/company',{
        templateUrl: 'partials/company.html',
        controller: 'companyController',
    })

    .when('/contact',{
        templateUrl: 'partials/contact.html',
        controller: 'contactController',
    })

    .when ('/new_contact',{
        templateUrl: 'partials/new_contact.html',
        controller: 'contactController',       
    })

    .when('/todo',{
        templateUrl: 'partials/todo.html',
        controller: 'todoController',
    })

    .when('/events', {
        templateUrl: 'partials/events.html',
        controller: 'eventsController',
    })

    .when('/archive', {
        templateUrl: 'partials/archive.html',
        controller: 'archiveController'
    })

	.otherwise({
		redirectTo: '/'
	})
});


