'use strict';

function UsersController($scope, $stateParams, users, usersService, usersModel) {
  'ngInject';

	var vm = this;
	vm.text = 'Hello';
	vm.users = users;
	vm.startDate = $stateParams.startDate;
	vm.endDate = $stateParams.endDate;

  activate();

  function activate() {
    var ids = vm.users.map(function(user) {
      return user.id;
    });
    usersService.startWorker(ids);
  }

}

export default UsersController;
