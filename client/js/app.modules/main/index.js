var angular = require('angular');

var mainModuleDependencies = [];

var mainModule = angular.module('mainModule', mainModuleDependencies)
    .config(require('./main.config'));

module.exports = mainModule.name;