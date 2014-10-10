'use strict';

/**
 * @ngdoc function
 * @name anguiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anguiApp
 */
angular.module('anguiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
