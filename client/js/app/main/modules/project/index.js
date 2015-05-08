var angular = require('angular');

var projectModule = angular.module('projectModule', [])
    .service('projectsService', require('./projects.service'))
    .config(require('./project.config.js'));

module.exports = projectModule.name;