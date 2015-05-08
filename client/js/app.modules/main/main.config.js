/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        controller: require('./main.controller'),
        controllerAs: 'page',
        templateUrl: {
            root: __dirname,
            name: 'main.view.html'
        }
    });
};