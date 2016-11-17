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

    .when('/company_all',{
        templateUrl: 'partials/company_all.html',
        controller: 'companyController',
    })

    .when('/company_new',{
        templateUrl: 'partials/company_new.html',
        controller: 'companyController',
    })

    .when('/company/:id',{
        templateUrl: 'partials/company.html',
        controller: 'companyController',
    })    

    .when('/company',{
        templateUrl: 'partials/company.html',
        controller: 'companyController',
    })    

    .when('/company_edit/:id',{
        templateUrl: 'partials/company_edit.html',
        controller: 'companyController',
    })

    .when('/contact',{
        templateUrl: 'partials/contact.html',
        controller: 'contactController',
    })

    .when('/contact_all',{
        templateUrl: 'partials/contact_all.html',
        controller: 'contactController',
    })

    .when ('/contact_new',{
        templateUrl: 'partials/contact_new.html',
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


