(function() {
  'use strict';

  angular
    .module('vehicle')
    .controller('VehiclesController', VehiclesController);

  /** @ngInject */
  function VehiclesController(vehiclesData,$log) {
    //var vehicles = this;
    var vm = this;
    vm.options = vehiclesData.options;
    vm.details = vehiclesData.data;
    vm.getCarThumb = function(url){
      return url=='' ? '/assets/images/car_placeholder.jpg' : url;
    }
  }
})();
