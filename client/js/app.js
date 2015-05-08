var angular = require('angular');

var appDependencies = []
    .concat(require('./vendor.modules'))
    .concat(require('./shared.modules'))
    .concat(require('./app.modules'));

angular.module('doWhileApp', appDependencies);