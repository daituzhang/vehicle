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
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('detail', {
        url: '/detail/:vin',
        templateUrl: 'app/pages/detail/detail.html',
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
        templateUrl: 'app/pages/vehicles/vehicles.html',
        controller: 'VehiclesController',
        controllerAs: 'vehicles',
        params: {
          year: {squash: true, value: null},
          make: {squash: true, value: null},
          model: {squash: true, value: null}
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
