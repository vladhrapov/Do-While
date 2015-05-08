/**
 * @ngInject
 */
module.exports = function ($stateParams, projectsService) {
    var vm = this;
    this.tasks = [];

    var id = $stateParams.projectId;

    projectsService.getById(id, function (res) {
        var project = res.data;
        vm.color = project.color;
        vm.name = project.name;

        projectsService.getTasks(id, function (res) {
            vm.tasks = res.data.items;
        })
    });
};