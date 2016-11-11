'use strict';

app.controller('AdminController', ['$scope', 'AdminService','$location','$rootScope',
             function($scope, AdminService,$location,$rootScope) {
	var self = this;
    
    self.pendingblogs=[];
    self.pendindusers=[];
    
    self.fetchAllPendingBlogs = function(){
        AdminService.fetchAllPendingBlogs()
            .then(
            function(d) {
            	
                self.pendingblogs = d;
                console.log("Pending blog"+ self.pendingblogs[0].user_id );
                
                
            },
            function(errResponse){
                console.error('Error while fetching Jobs'+ errResponse);
            }
        );
    };
    
    self.fetchAllPendingBlogs();
    
    self.approveBlog = function(id){
    	AdminService.approveBlog(id) .then(self.fetchAllPendingBlogs(),
    			function(errResponse){
    				console.error("Error while approve blog");
    	});
    	
    };
    
    self.rejectBlog = function(id){
    	AdminService.rejectBlog(id) .then(self.fetchAllPendingBlogs(),
    			function(errResponse){
    				console.error("Error while reject blog");
    	});
    	
    };
    
    self.fetchAllPendingUsers = function(){
        AdminService.fetchAllPendingUsers()
            .then(
            function(d) {
            	
                self.pendingusers = d;
                console.log("Pending user "+ self.pendingusers[0].user_id );
                
                
            },
            function(errResponse){
                console.error('Error while pending users'+ errResponse);
            }
        );
    };
    
    self.fetchAllPendingUsers();
    
    self.approveUser = function(id){
    	AdminService.approveUser(id) .then(self.fetchAllPendingUsers(),
    			function(errResponse){
    				console.error("Error while approve user");
    	});
    	
    };
    
    self.rejectUser = function(id){
    	AdminService.rejectUser(id) .then(self.fetchAllPendingUsers(),
    			function(errResponse){
    				console.error("Error while reject user");
    	});
    	
    };
    
    
    self.approveblog = function(id){
        console.log('id to be approveBlog', id);
        
        self.approveBlog(id);
    }
    
    self.rejectblog = function(id){
        console.log('id to be rejectBlog', id);
        
        self.rejectBlog(id);
    }
    
    self.approveuser = function(id){
        console.log('id to be approveuser', id);
        
        self.approveUser(id);
    }
    
    self.rejectuser = function(id){
        console.log('id to be rejectuser', id);
        
        self.rejectUser(id);
    }


}]);