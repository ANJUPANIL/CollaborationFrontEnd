'use strict';


app.controller('UserController', ['$scope', 'UserService','$location','$rootScope','$cookieStore','$http',
             function($scope, UserService,$location,$rootScope,$cookieStore,$http) {
	var self = this;
    self.user={
    		user_id:'',
    		fname:'',
    		mname:'',
    		lname:'',
    		dob:'',
    		address:'',
    		contact:'',
    		role:'',
    		errorMessage:''};
    self.users=[];
    	
     self.fetchAllUsers = function(){
        UserService.fetchAllUsers()
            .then(
            function(d) {
                self.users = d;
                console.log("Fetch all users sucess")
            },
            function(errResponse){
                console.error('Error while fetching Users'+ errResponse);
            }
        );
    };

     self.createUser = function(user){
    	 
        UserService.createUser(user)
            .then(self.fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    };

     self.updateUser = function(user, id){
        UserService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    };
    self.authenticate = function(user){
         UserService.authenticate(user)
             .then(
            		 function(d) {
                         self.user = d;
                         if(self.user.errorMessage=="")
                        	 {
                        	 	console.log("valid user")
                        	 	$rootScope.currentUser={
	    								fname:self.user.fname,
	    								user_id:self.user.user_id,
	    								role:self.user.role
	    						};
                        	 	$http.defaults.headers.common['Authorization']= 'Basic' + $rootScope.currentUser;
                        	 	$cookieStore.put('currentUser',$rootScope.currentUser);
                        	 	$location.path('/home');
                        	 	
                        	 }
                         else{
                        	 alert("Invalid credentials..Please enter valid credentials");
                         }
                     },
                     
             function(errResponse){
                 console.error('Error while authenticate User');
             }
         );
     };
     
     

     self.deleteUser = function(id){
        UserService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    };
    
    self.logout=function(){
    	console.log("Logout function in user controller")
    	$rootScope.currentUser={};
    	$cookieStore.remove('currentUser');
    	UserService.logout()
    };

    self.fetchAllUsers();
    
    self.login = function(){
    	{
    		self.authenticate(self.user);
    	}
    	
    };
    self.logoutuser=function(){
    
    	console.log('Logout User');
    	self.logout();
    
    };
     self.submit = function() {
     {
            console.log('Saving New User', self.user);
            self.createUser(self.user);
     }
      self.reset();
    };

     self.edit = function(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].user_id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    };

     self.remove = function(id){
        console.log('id to be deleted', id);
        if(self.user.user_id === id) {//clean form if the user to be deleted is shown there.
            self.reset();
        }
        deleteUser(id);
    }


    function reset(){
        self.user={
        		user_id:'',
        		fname:'',
        		mname:'',
        		lname:'',
        		dob:'',
        		address:'',
        		contact:'',
        		createddate:'',
        		role:'',
        		errorMessage:''};
        $scope.myForm.$setPristine(); //reset Form
    }
   
}]);