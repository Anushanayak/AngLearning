'use strict';

/**
 * @ngdoc function
 * @name anguiApp.controller:FolderViewAccordianCtrl
 * @description
 * # FolderViewAccordianCtrl
 * Controller of the anguiApp
 */
angular.module('anguiApp')
        .controller('FolderViewAccordianCtrl', function ($scope) {
            $scope.oneAtATime = true;
            $scope.status = {
                open: true
            };
            $scope.$watch('first.open', function (isOpen) {
                if (!isOpen) {
                    console.log('First group was opened');
                }
            });
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
