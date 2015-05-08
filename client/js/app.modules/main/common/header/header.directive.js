/**
 * @ngInject
 * */
module.exports = function (viewResolver) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            color: '=',
            menuClick: '&'
        },
        templateUrl: viewResolver.resolve('header.template.html', __dirname)
    };
};
