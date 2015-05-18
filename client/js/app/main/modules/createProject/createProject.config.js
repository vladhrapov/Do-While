/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main.createProject', {
        url: '/project/create',
        templateUrl: {
            root: __dirname,
            name: 'createProject.view.html'
        }
    });
};