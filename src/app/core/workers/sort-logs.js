import stub from '../../../assets/data/logs.json';

onmessage = function(event) {
	var ids = Array.prototype.slice.call(event.data);
	ids.forEach(fetchDataForUser);
	postMessage({ status: 'close' });
}

function fetchDataForUser(id) {
	var logs = stub.filter(function(log) {
		return log.user_id === id;
	});
	postMessage({ id: id, logs: logs, status: 'update' });
}
