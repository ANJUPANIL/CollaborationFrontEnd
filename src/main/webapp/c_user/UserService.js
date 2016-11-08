'use strict';

app.factory('UserService',['$http', '$q', '$rootScope', function($http,$q,$rootScope){
	
	
	var BASE_URL='http://localhost:8080/collaborationpjtbackend'
		return{
		
		 fetchAllUsers: function() {
	        
	        return $http.get(BASE_URL+'/allusers')
	            .then(
	            function (response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching Users');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },

	    createUser: function(user) {
	        
	        return $http.post(BASE_URL+'/saveuser/',user)
	            .then(
	            function (response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching Users');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },


	    updateUser: function(user, id) {
	        
	        return $http.put(BASE_URL+'/user/',id, user)
	            .then(
	            function (response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while updating User');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },

	   /* deleteUser: function(id) {
	        
	        return $http.delete(BASE_URL+'/user/'+id)
	            .then(
	            function(response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while deleting User');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    
		}*/
	    

	    
	    logout:function(id){
	    	return $http.get(BASE_URL+'/user/logout')
            .then(
    	            function (response) {
    	                return response.data;
    	            },
    	            function(errResponse){
    	                console.error('Error while logout User');
    	                return $q.reject(errResponse);
    	            }
	    	
	    );
	},
	    

	    authenticate: function(user){
	    	return $http.post(BASE_URL+'/user/authenticate',user)
	    	.then(
	    			function(response){
	    				/*if(response.data.errorMessage=="")
	    					{
	    					
	    						$rootScope.currentUser={
	    								fname:response.data.fname,
	    								user_id:response.data.user_id,
	    								role:response.data.role
	    						};
	    						
	    					}*/
	    				return response.data;
	    			},
	    
	    	function(errResponse)
	    	{
	    		//$rootScope.userLoggedIn=false;
	    		console.error('Error while getting user');
	    		return $q.reject(errResponse);
	    		
	    	});
	    	
	    	
	    	
	    	
	    }
	
	}
	
	
}]);

