'use strict';

/**
 * @ngdoc function
 * @name pillarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pillarApp
 */
angular.module('pillarApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
