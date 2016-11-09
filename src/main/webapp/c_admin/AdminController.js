'use strict';

app.controller('AdminController', ['$scope', 'AdminService','$location','$rootScope',
             function($scope, AdminService,$location,$rootScope) {
	var self = this;
    
    self.pendingblogs=[];
    
    
    self.fetchAllPendingBlogs = function(){
        AdminService.fetchAllPendingBlogs()
            .then(
            function(d) {
                self.pendingblogs = d;
                
            },
            function(errResponse){
                console.error('Error while fetching Jobs'+ errResponse);
            }
        );
    };
    
    self.fetchAllPendingBlogs();
}]);