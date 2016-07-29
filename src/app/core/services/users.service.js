var Worker = require('worker!../workers/sort-logs');

export default function (app) {
    app
				.factory('usersService', usersService);

		function usersService($rootScope, usersModel) {
				return {
					startWorker: startWorker,
					parseMetaDataForRange: parseMetaDataForRange
				}

				function startWorker(ids) {
					// Check if logs are not loaded/cached
					if(!usersModel.getAll()[0].logs) {
						var worker = new Worker;
						worker.onmessage = function(event) {
							if(event.data.status === 'close') {
								worker.terminate();
								$rootScope.$digest();
							} else if (event.data.status === 'update'){
								var user = usersModel.get(event.data.id);
								user.logs = event.data.logs;
							}
						}
						worker.postMessage(ids);
					} else {
						console.log('cached')
					}
				}

				function parseMetaDataForRange(user, startDate, endDate) {
					let parsedStartDate = new Date(startDate),
							parsedEndDate = new Date(endDate),
							metaData = { impressions: 0, revenue: 0, conversions: []};
					user.logs.forEach(function(log) {
						let time = new Date(log.time);
						if(parsedStartDate < time && time < parsedEndDate) {
							metaData.revenue += log.revenue;
							if(log.type === 'impression') {
								metaData.impressions++;
							} else {
								metaData.conversions.push(log);
							}
						}
					});

					return metaData;
				}
		}
}
