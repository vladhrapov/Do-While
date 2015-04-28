var angular = require('angular');

var mainModule = angular.module('mainModule', ['commonModule'])
    .controller('mainCtrl', require('./main.controller.js'));


module.exports = mainModule;
