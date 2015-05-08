var angular = require('angular');

var exampleModule = angular.module('example', [require('../../shared.modules/greet')])
    .config(function ($stateProvider) {
        $stateProvider.state('example', {
            url: '/example',
            templateUrl: '/views' + __dirname + '/example.view.html',
            controller: require('./example.controller.js')
        });
    });

module.exports = exampleModule.name;
