'use strict';

export default angular.module('index.components', [
	require('./components/user-pill/user-pill.component').name,
	require('./components/avatar/avatar.component').name,
	require('./components/charts/conversions-histogram.component').name
]);
