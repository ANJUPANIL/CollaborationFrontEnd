<<<<<<< HEAD
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
		var restrictedPage=$.inArray($location.path(),['/register','/viewjob'])== -1;
		console.log("restrictedpage ;"+restrictedPage)
		var loggedIn=$rootScope.currentUser;
		console.log("loggedin:"+loggedIn)
		if(restrictedPage){
			console.log("navigation to login page")
			$location.path('/login');
		}
		
	});
	
	$rootScope.currentUser=$cookieStore.get('currentUser')||{};
	if($rootScope.currentUser){
		$http.defaults.headers.common['Authorization']= 'Basic' + $rootScope.currentUser;
	}
	
	
});





















=======
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
	
});
>>>>>>> branch 'master' of https://github.com/ANJUPANIL/CollaborationFrontEnd

