var angular = require('angular');

var createModule = angular.module('createModule', [])
    .controller('createCtrl', require('./createProject.controller'))
    .config(require('./createProject.config'));

module.exports = createModule.name;