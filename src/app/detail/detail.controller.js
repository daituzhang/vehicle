(function() {
  'use strict';

  angular
    .module('vehicle')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(detailData,$log) {
    var vm = this;
    vm.detail = detailData;
    var lock = 0;
    vm.slideCur = 0;
    vm.slideLength = vm.detail.mediumResPhotos.length;
    vm.slideLeft = function() {
      lock = 1;
      vm.slideCur = vm.slideCur == 0 ? vm.slideLength - 1 : vm.slideCur - 1;
    }
    vm.slideRight = function() {
      lock = 1;
      vm.slideCur = vm.slideCur == vm.slideLength - 1 ? 0 : vm.slideCur + 1;
    }
  }
})();
