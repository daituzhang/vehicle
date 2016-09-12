(function() {
  'use strict';

  angular
    .module('vehicle')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($cookies) {
    var vm = this;
    //read options to cookie
    vm.year = $cookies.get('vehicle_year');
    vm.make = $cookies.get('vehicle_make');
    vm.model = $cookies.get('vehicle_model');
  }
})();
