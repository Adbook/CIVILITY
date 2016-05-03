'use strict';

// Declare app level module which depends on views, and components
angular.module('brainConnectivity', [
  'ngRoute',
  'ui.bootstrap',
  'ngTable'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/welcome', {
    templateUrl: 'views/controllers/welcome.html'
  })
  .when('/tractographyApp', {
    templateUrl: 'views/controllers/tractographyApp.html'
  })
  .when('/login/reset', {
    templateUrl: 'views/controllers/welcome.html'
  })
  .otherwise({redirectTo: '/welcome'});
}]);
