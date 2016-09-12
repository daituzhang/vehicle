(function() {
  'use strict';

  angular
    .module('vehicle')
    .controller('VehiclesController', VehiclesController);

  /** @ngInject */
  function VehiclesController($log,VehiclesService,$scope,$stateParams) {

    $scope.options = $stateParams;
    var vm = this;
    vm.details = [];

    //use placeholder if no thumbnail
    vm.getCarThumb = function(url){
      return url=='' ? '/assets/images/car_placeholder.jpg' : url;
    }

    //watch nav directive change and call vehiclesService
    $scope.$watch("options", function(newValue, oldValue) {
      VehiclesService.get($scope.options.year,$scope.options.make,$scope.options.model).then(function(details){
        vm.details = details;
      }); 
    },true);
  }
})();
