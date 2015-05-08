var angular = require('angular');

var menuModule = angular.module('menuModule', [])
    .directive('dwMenu', require('./menu.directive'))
    .service('menuService', require('./menu.service'));

module.exports = menuModule.name;