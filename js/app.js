/* jslint browser: true, esnext: true */

// var angular = require('angular');
// var angularRoute = require('angular-route');
// require('./factory');
// require('./controllers');

var mainApp = angular.module('SiteApp', ['ngRoute', 'MySiteService', 'Controllers']);

mainApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/about', {
      controller: 'AboutViewController',
      templateUrl: 'pageviews/about.html',
    })
    .when('/projects', {
      controller: 'ProjectsViewController',
      templateUrl: 'pageviews/projects.html',
    })
    .when('/resume', {
      controller: 'ResumeViewController',
      templateUrl: 'pageviews/resume.html',
    })
    .otherwise({
      redirectTo: '/about',
    });
}]);

mainApp.exports = (function(){

  var controllers = angular.module('Controllers', []);

  controllers.controller('AboutViewController', ['$scope', function ($scope){
    // console.log('main view');
  }]);

  controllers.controller('ProjectsViewController', ['$scope', function ($scope){
    // console.log('projects view');
  }]);

  controllers.controller('ResumeViewController', ['$scope', function ($scope){
    // console.log('resume view');
  }]);
});


mainApp.exports = (function(){
  var service = angular.module('MySiteService', []);

  service.factory('MySiteService', function(){
    // console.log('Hello');
  });
});
