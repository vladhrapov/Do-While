/*
 * @ngInject
 * */
module.exports = function ($scope, projectService) {

    $scope.addNewProject = function(){
        console.log('Add project! name: ' + $scope.name + ' color: ' + $scope.color);
        projectService
            .create($scope);
    };
};