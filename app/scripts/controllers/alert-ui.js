'use strict';

/**
 * @ngdoc function
 * @name anguiApp.controller:AlertUiCtrl
 * @description
 * # AlertUiCtrl
 * Controller of the anguiApp
 */
angular.module('anguiApp')
        .controller('AlertUiCtrl', function ($scope) {
            $scope.alerts = [
                {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
                {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
            ];

            $scope.addAlert = function () {
                $scope.alerts.push({type: 'danger', msg: 'Another alert!'});
            };

            $scope.closeAlert = function (index) {
                $scope.alerts.splice(index, 1);
            };
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });

