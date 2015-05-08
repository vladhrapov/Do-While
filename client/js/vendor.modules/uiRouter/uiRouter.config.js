var angular = require('angular');
/**
 * @ngInject
 * */
module.exports = function ($stateProvider, viewResolverProvider) {

    var viewResolver = viewResolverProvider.$get();

    $stateProvider.decorator('views', function (state, parent) {
        var result = {},
            views = parent(state);

        angular.forEach(views, function (config, name) {
            config.templateUrl = viewResolver.resolve(config.templateUrl);
            result[name] = config;
        });

        return result;
    });
};