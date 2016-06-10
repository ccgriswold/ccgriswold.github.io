/* jslint browser: true, esnext: true */

module.exports = (function(){

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
})();
