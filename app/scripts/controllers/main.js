'use strict';

/**
 * @ngdoc function
 * @name angLearningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angLearningApp
 */
angular.module('angLearningApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
