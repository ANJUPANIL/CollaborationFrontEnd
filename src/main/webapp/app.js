var app=angular.module('myApp' , ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/home', {
		templateUrl : 'c_home/home.html',
		controller  : 'HomeController'
	})

	.when('/register', {
		templateUrl : 'c_user/register.html',
		controller  : 'UserController'
	})
	
	.when('/postjob', {
		templateUrl : 'c_job/postjob.html',
		controller  : 'JobController'
	})
	
	.when('/viewjob', {
		templateUrl : 'c_job/viewjob.html',
		controller  : 'JobController'
	})
	
	.when('/blog', {
		templateUrl : 'c_blog/blog.html',
		controller  : 'BlogController'
	})
	
	.otherwise({redirectTo: '/'});
	alert("hi")
	
})
