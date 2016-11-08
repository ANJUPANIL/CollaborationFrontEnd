
'use strict';

app.controller('BlogController', ['$scope', 'BlogService','$location','$rootScope',
             function($scope, BlogService,$location,$rootScope) {
	var self = this;
    self.blog={
    		blog_title:'',
    		blog_content:'',
    		errorMessage:''};
    self.blogs=[];
    
    
    self.fetchAllBlogs = function(){
        BlogService.fetchAllBlogs()
            .then(
            function(d) {
                self.blogs = d;
                
            },
            function(errResponse){
                console.error('Error while fetching Blogs'+ errResponse);
            }
        );
    };

     self.createBlog= function(blog){
    	 
        BlogService.createBlog(blog)
            .then(self.fetchAllBlogs,
            function(errResponse){
                console.error('Error while creating Job');
            }
        );
    };
    
    self.fetchAllBlogs();
    
    
     self.submit = function() {
     {
            console.log('Saving New Blog');
            self.createBlog(self.blog);
     }
      self.reset();
    };

     self.edit = function(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.blogs.length; i++){
            if(self.blogs[i].job_id === id) {
                self.blog= angular.copy(self.blogs[i]);
                break;
            }
        }
    };

     self.remove = function(id){
        console.log('id to be deleted', id);
        if(self.blog.blog_id === id) {//clean form if the user to be deleted is shown there.
            self.reset();
        }
        deleteBlog(id);
    }


    
    
}]);

