'use strict';

app.factory('AdminService',['$http', '$q', '$rootScope', function($http,$q,$rootScope){
	
	
	var BASE_URL='http://localhost:8080/collaborationpjtbackend'
		return{
		
		fetchAllPendingBlogs: function() {
	        
	        return $http.get(BASE_URL+'/allpendingblogs')
	            .then(
	            function (response) {
	            	console.log('Fetch blog in Admin Service'+ response.data[0].user)
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching pending blog');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },
	    approveBlog: function(id) {
	        
	        return $http.put(BASE_URL+'/adminapprove/'+id)
	            .then(
	            function(response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while approve blog');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    
		},
		rejectBlog: function(id) {
	        
	        return $http.put(BASE_URL+'/adminreject/'+id)
	            .then(
	            function(response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while reject blog');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    
		},
		fetchAllPendingUsers: function() {
	        
	        return $http.get(BASE_URL+'/allpendingregister')
	            .then(
	            function (response) {
	            	console.log('Fetch blog in Admin Service'+ response.data[0].user)
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching pending user');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },
	    approveUser: function(id) {
	        
	        return $http.put(BASE_URL+'/registerapprove/'+id)
	            .then(
	            function(response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while approve user');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    
		},
		rejectUser: function(id) {
	        
	        return $http.put(BASE_URL+'/registerreject/'+id)
	            .then(
	            function(response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while reject user');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    
		}
		
	};
}])