var angular = require('angular');

var commonModule = angular.module('commonModule', [])
    .factory('globalData', require('./global-data.service.js'));

module.exports = commonModule;
