var angular = require('angular');

var uiRouterModule = angular.module(require('ui-router'))
    .provider('viewResolver', require('./viewResolver.provider'))
    .config(require('./uiRouter.config'));

module.exports = uiRouterModule.name;