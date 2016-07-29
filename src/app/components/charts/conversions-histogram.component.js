'use strict';

import conversionsHistogramTpl from './conversions-histogram.html';

const charts = angular.module('charts', []);

charts
  .component('tuConversionsHistogram', {
		bindings: {
			data: '<',
			startDate: '<',
			endDate: '<'
		},
		controller: ConversionsHistogramController,
    templateUrl: conversionsHistogramTpl
  });

  function ConversionsHistogramController ($scope, usersService, usersModel) {
		var vm = this;

		$scope.$watch(function() {
			return vm.data;
		}, function() {
			if(vm.data && vm.data.length) {
				renderChart();
			}
		});

		function renderChart() {
			let data = aggregateConversions();

			vm.formattedData = data.data;
			vm.labels = data.labels;
			vm.series = [];
			vm.options = {
				tooltips: {
		      enabled: false,
		    },
		    legend: {
		      display: false,
		    },
		    pointDot: false,
				scales: {
		      xAxes: [{
		        display: false,
		      }],
		      yAxes: [{
		        display: false,
		      }]
		    }
			}
		}

		 function aggregateConversions() {
			 let datesHash = {},
						data = [],
						labels = [];
			 vm.data.forEach(function(log) {
				 let date = new Date(log.time).toDateString();
				 if(datesHash[date]) {
					 datesHash[date]++;
				 } else {
					 datesHash[date] = 1;
				 }
			 })
			 for(var date in datesHash) {
				 data.push(datesHash[date]);
				 labels.push(date);
			 }
			 return { data: data, labels: labels };
		 }
  }

export default charts;
