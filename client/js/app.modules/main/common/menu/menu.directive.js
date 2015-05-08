/**
 * @ngInject
 */
module.exports = function (viewResolver) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            isVisible: '='
        },
        transclude: false,
        templateUrl: viewResolver.resolve('menu.template.html', __dirname)
    };
};