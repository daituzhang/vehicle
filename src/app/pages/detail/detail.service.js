(function() {
  'use strict';

  angular
    .module('vehicle')
    .factory('DetailService', DetailService);

  /** @ngInject */
  function DetailService($log,$http) {
    var apiHost = 'https://7d31xpvdm7.execute-api.us-east-1.amazonaws.com/yulu/vehicles/';
    return {
      //get the details
      get: function(vin) {
        return $http.get(apiHost + vin)
        .then(getDetailComplete)
        .catch(getDetailFailed);

        //get price history
        function getPriceHistory(vin) {
          return $http.get(apiHost + 'price-history/' + vin)
          .then(getPriceComplete)
          .catch(getPriceFailed); 
        }

        function getDetailComplete(response) {
          var details = response.data[0];
          return getPriceHistory(vin).then(function(priceHistory){
            if(priceHistory){
              details.priceHistory = priceHistory.priceHistory;
            }
            return details;      
           });  
        }

        function getDetailFailed(error) {
          $log.error('XHR Failed for getDetail.\n' + angular.toJson(error.data, true));
        }

        function getPriceComplete(response) {
          return response.data[0];
        }

        function getPriceFailed(error) {
          $log.error('XHR Failed for getPrice.\n' + angular.toJson(error.data, true));
        }
      }
    }
  }
})();
