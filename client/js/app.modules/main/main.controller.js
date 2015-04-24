/**
 * @ngInject
 * */
module.exports = function ($scope, $http){
    $scope.isNavHide = true;
    $scope.$watch("isNavHide",function(oldValue, newValue){console.log(newValue);});
};
