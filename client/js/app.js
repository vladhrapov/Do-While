var angular = require('angular');

var vendorDependencies = [
    require('ui-router')
];

var appDependencies = vendorDependencies
    .concat(require('./shared.modules'))
    .concat(require('./app.modules'));

angular.module('doWhileApp', appDependencies);
