'use strict';

app.controller('HomeController', ['$scope', 'UserService','$rootScope',
                                  function($scope, UserService,$rootScope) {
	
	console.log("Home Controller..")
	var self=this;
	
	self.getCurrentUser = function()
	{
		console.log("Loading current user if already logged in")
		console.log("Current user :"+$rootScope.currentUser)
		if(!$rootScope.currentUser){
			console.log("user not logged in")
			$rootScope.currentUser="";
		}
		return $rootScope.currentUser;
	}
	
	self.getCurrentUser();
	
	
	
}]);

