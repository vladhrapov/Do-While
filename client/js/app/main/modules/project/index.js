var angular = require('angular');

var projectModule = angular.module('projectModule', [
    /* deps */
]).config(require('./project.config.js'));

module.exports = projectModule.name;