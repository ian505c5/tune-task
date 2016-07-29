'use strict';

import usersTpl from './users.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('users', {
      url: '/users?startDate&endDate',
      templateUrl: usersTpl,
      controller: require('./users.controller'),
      controllerAs: '$ctrl',
			resolve: {
				users: function(usersModel) {
					return usersModel.findAll();
				}
			},
			params: {
				startDate: {
					value: '2013-04-12'
				},
				endDate: {
					value: '2013-04-30'
				}
			}
    });
}

export default routeConfig;
