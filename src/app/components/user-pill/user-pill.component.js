'use strict';

import userPillTpl from './user-pill.html';
import './user-pill.scss';

const userPillModule = angular.module('user-pill', []);

userPillModule
  .component('tuUserPill', {
		bindings: {
			user: '<',
			startDate: '<',
			endDate: '<'
		},
		controller: UserPillController,
    templateUrl: userPillTpl
  });

  function UserPillController ($scope, usersService, usersModel) {
		var vm = this;

		$scope.$watch(function () {
		  return usersModel.lastModified(vm.user.id);
		}, function () {
			vm.user = usersModel.get(vm.user.id);
			if(vm.user.logs) {
				vm.metaData = usersService.parseMetaDataForRange(vm.user, vm.startDate, vm.endDate);
			}
		});

  }

export default userPillModule;
