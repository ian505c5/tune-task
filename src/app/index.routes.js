'use strict';

function routeConfig($urlRouterProvider) {
  'ngInject';



  $urlRouterProvider.otherwise('/users?startDate=2013-04-12&endDate=2013-04-31');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);
