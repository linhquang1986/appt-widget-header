'use-strict';
var app = angular.module('appt-widget-header', []);
app.controller('SettingsController1', ['$scope', function ($scope) {
    $scope.config = {
        bgCol: 'red',
        fontStyle: '18px',
        ali: 'left'
    }
    $scope.testChange = function () {
        $scope.config = {
            bgCol: 'blue',
            col: 'white',
            ali: 'center'
        }
    }
}]);
app.directive('apptWidgetHeader', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'appt-widget-header.html',
        controller: 'SettingsController1',
        controllerAs: 'settingCtrl'
/*,
     link: function (scope, element, attr) {
     */
        /*scope.bgCol = '#FFFF00';*/
/*
     console.log(scope.config);
     }*/
    };
});