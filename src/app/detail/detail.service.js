(function() {
  'use strict';

  angular
    .module('vehicle')
    .factory('DetailService', DetailService);

  /** @ngInject */
  function DetailService($log,$http) {
    var apiHost = 'https://7d31xpvdm7.execute-api.us-east-1.amazonaws.com/yulu/vehicles/';
    return {
      get: function(vin) {
        return $http.get(apiHost + vin)
        .then(getDetailComplete)
        .catch(getDetailFailed);

        function getDetailComplete(response) {
          return response.data[0];
        }

        function getDetailFailed(error) {
          $log.error('XHR Failed for getDetail.\n' + angular.toJson(error.data, true));
        }
      }
    }
  }
})();
