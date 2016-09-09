(function() {
  'use strict';

  angular
    .module('vehicle')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($log,detailData) {
    var car = this;
    $log.log(detailData);
    car.title="try";
    car.detail = detailData;
  }
})();
