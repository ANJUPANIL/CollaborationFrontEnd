'use strict';

app.controller('JobController', ['$scope', 'JobService','$location','$rootScope',
             function($scope, JobService,$location,$rootScope) {
	var self = this;
    self.job={
    		job_title:'',
    		job_companyname:'',
    		job_description:'',
    		job_role:'',
    		job_experience:'',
    		job_location:'',
    		errorMessage:''};
    self.jobs=[];
    
    
    self.fetchAllJobs = function(){
        JobService.fetchAllJobs()
            .then(
            function(d) {
                self.jobs = d;
                
            },
            function(errResponse){
                console.error('Error while fetching Jobs'+ errResponse);
            }
        );
    };

     self.createJob = function(job){
    	 
        JobService.createJob(job)
            .then(
            fetchAllJobs,
            function(errResponse){
                console.error('Error while creating Job');
            }
        );
    };
    
    self.fetchAllJobs();
    
    
     self.submit = function() {
     {
            console.log('Saving New Job', self.job);
            self.createJob(self.job);
     }
      self.reset();
    };

     self.edit = function(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.jobs.length; i++){
            if(self.jobs[i].job_id === id) {
                self.job = angular.copy(self.jobs[i]);
                break;
            }
        }
    };

     self.remove = function(id){
        console.log('id to be deleted', id);
        if(self.job.job_id === id) {//clean form if the user to be deleted is shown there.
            self.reset();
        }
        deleteJob(id);
    }


    
    
}]);
