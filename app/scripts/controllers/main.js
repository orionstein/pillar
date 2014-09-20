'use strict';

/**
 * @ngdoc function
 * @name pillarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pillarApp
 */
angular.module('pillarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
