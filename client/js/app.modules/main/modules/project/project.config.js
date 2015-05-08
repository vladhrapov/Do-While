/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('main.project', {
        url: '/projects/{id:[0-9a-fA-F]{1,8}}',
        templateUrl: {
            root: __dirname,
            name: 'project.view.html'
        }
    });
};