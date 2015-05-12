/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main.today', {
        url: '',
        templateUrl: {
            root: __dirname,
            name: 'today.view.html'
        }
    });
};