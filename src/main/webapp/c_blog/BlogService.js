<<<<<<< HEAD
'use strict';

app.factory('BlogService',['$http', '$q', '$rootScope', function($http,$q,$rootScope){
	
	
	var BASE_URL='http://localhost:8080/collaborationpjtbackend'
		return{
		
		 fetchAllBlogs: function() {
	        
	        return $http.get(BASE_URL+'/allblogs')
	            .then(
	            function (response) {
	            	console.log('Fetch in blog Service')
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching blogs');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },

	    createBlog: function(blog) {
	        
	        return $http.post(BASE_URL+'/saveblog/',blog)
	            .then(
	            function (response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching blogs');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },


	    updateBlog: function(blog, id) {
	        
	        return $http.put(BASE_URL+'/updateblog/',id, blog)
	            .then(
	            function (response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while updating blog');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },

	   /* deleteBlog: function(id) {
	        
	        return $http.delete(BASE_URL+'/Job/'+id)
	            .then(
	            function(response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while deleting Job');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    
		}*/
	
	}
	
	
}]);

=======
/**
 * 
 */
>>>>>>> branch 'master' of https://github.com/ANJUPANIL/CollaborationFrontEnd
