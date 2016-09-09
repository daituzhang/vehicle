(function() {
  'use strict';

  angular
    .module('vehicle')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
