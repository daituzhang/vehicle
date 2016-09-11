(function() {
  'use strict';

  angular
    .module('vehicle')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('detail', {
        url: '/detail/:vin',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'car',
        resolve: {
          detailData: function(DetailService, $stateParams) {
            return DetailService.get($stateParams.vin);
          }
        }
      })
      .state('vehicles', {
        url: '/vehicles/:year/:make/:model',
        templateUrl: 'app/vehicles/vehicles.html',
        controller: 'VehiclesController',
        controllerAs: 'vehicles',
        params: {
          year: {squash: true, value: null},
          make: {squash: true, value: null},
          model: {squash: true, value: null}
        },
        resolve: {
          vehiclesData: function(VehiclesService,$stateParams) {
            return VehiclesService.get($stateParams.year,$stateParams.make,$stateParams.model);
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
