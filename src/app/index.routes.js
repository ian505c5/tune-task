'use strict';

function routeConfig($urlRouterProvider) {
  'ngInject';



  $urlRouterProvider.otherwise('/users');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);
