'use strict';

app.factory('JobService',['$http', '$q', '$rootScope', function($http,$q,$rootScope){
	
	
	var BASE_URL='http://localhost:8080/collaborationpjtbackend'
		return{
		
		 fetchAllJobs: function() {
	        
	        return $http.get(BASE_URL+'/alljobs')
	            .then(
	            function (response) {
	            	console.log('Fetch in Job Service')
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching Jobs');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },

	    createJob: function(job) {
	        
	        return $http.post(BASE_URL+'/savejob/',job)
	            .then(
	            function (response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching Jobs');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },


	    updateJob: function(job, id) {
	        
	        return $http.put(BASE_URL+'/updatejob/',id, job)
	            .then(
	            function (response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while updating Job');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    },

	   deleteJob: function(id) {
	        
	        return $http.put(BASE_URL+'/deletejob/'+id)
	            .then(
	            function(response) {
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while deleting Job');
	                return $q.reject(errResponse);
	            }
	        );
	        
	    
		}
	
	}
	
	
}]);

