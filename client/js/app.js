var angular = require('angular');

var appDependencies = []
    .concat(require('./vendor'))
    .concat(require('./common'))
    .concat(require('./app/index'));

angular.module('doWhileApp', appDependencies);