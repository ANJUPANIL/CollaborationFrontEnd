'use strict';

app.factory('JobService',['$http', '$q', '$rootScope', function($http,$q,$rootScope){
	
	
	var BASE_URL='http://localhost:8080/collaborationpjtbackend'
		return{
		
		fetchAllPendingBlogs: function() {
	        
	        return $http.get(BASE_URL+'//allpendingblogs')
	            .then(
	            function (response) {
	            	console.log('Fetch blog in Admin Service')
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching pending blog');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },
		
	}
}])