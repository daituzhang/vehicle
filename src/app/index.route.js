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
            return DetailService.get($stateParams.vin)
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
