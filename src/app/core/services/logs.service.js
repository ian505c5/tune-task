export default function (app) {
    app
				.factory('logsModel', logsModel);

		function logsModel(DS) {
				return DS.defineResource({
						name: 'log',
						defaultAdapter: 'DSLogsAdapter',
						idAttribute: 'id'
				});
		}
}
