export default function (app) {
    app
				.factory('usersModel', usersModel);

		function usersModel($rootScope, DS) {
				return DS.defineResource({
						name: 'user',
						defaultAdapter: 'DSUsersAdapter',
						idAttribute: 'id'
				});
		}
}
