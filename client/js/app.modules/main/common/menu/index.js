var angular = require('angular');

var menuModule = angular.module('menuModule', [])
    .directive('dwMenu', require('./menu.directive'));

module.exports = menuModule.name;