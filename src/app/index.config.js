(function() {
  'use strict';

  angular
    .module('vehicle')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, toastrConfig) {
    // Enable log
    $locationProvider.html5Mode(true);
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
