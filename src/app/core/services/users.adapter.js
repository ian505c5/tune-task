import stub from '../../../assets/data/users.json';

export default function (app) {
    app
				.run(function(DS, DSUsersAdapter) {
						DS.adapters.DSUsersAdapter = DSUsersAdapter;
				})
				.provider('DSUsersAdapter', function() {
            this.$get = ['$q', function($q) {
                return {
                    findAll: function(resourceConfig) {
                        return $q.when(stub);
                    }
                };
            }];
        });
}
