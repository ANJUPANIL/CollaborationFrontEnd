
var app=angular.module('myApp' , ['ngRoute','ngCookies' ]);

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
	
	.when('/viewblog', {
		templateUrl : 'c_blog/viewblog.html',
		controller  : 'BlogController'
	})
	
	.otherwise({redirectTo: '/'});
	alert("hi")
	
});

app.run( function($rootScope,$location,$cookieStore,$http){
	
	$rootScope.$on('$locationChangeStart',function(event,next,current){
		console.log("$locationChangeStart")
		var restrictedPage=$.inArray($location.path(),['/postjob','/blog'])== -1;
		console.log("restrictedpage ;"+restrictedPage)
		var loggedIn=$rootScope.currentUser;
		console.log("loggedin:"+loggedIn)
		if(restrictedPage & loggedIn){
			console.log("navigation to login page")
			$location.path('/home');
		}
		
	});
	
	$rootScope.currentUser=$cookieStore.get('currentUser')||{};
	if($rootScope.currentUser){
		$http.defaults.headers.common['Authorization']= 'Basic' + $rootScope.currentUser;
	}
	
	
});





















