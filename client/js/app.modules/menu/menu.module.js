var angular = require('angular');

var menuModule = angular.module('menuModule', ['commonModule'])
    .controller('menuCtrl', require('./menu.controller.js'));


module.exports = menuModule;
