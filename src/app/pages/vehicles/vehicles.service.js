(function() {
  'use strict';

  angular
    .module('vehicle')
    .factory('VehiclesService', VehiclesService);

  /** @ngInject */
  function VehiclesService($log,$http) {
    var apiHost = 'https://7d31xpvdm7.execute-api.us-east-1.amazonaws.com/yulu/vehicles/';
    return {
      //get all vehicles
      get: function(year,make,model) {
        return $http.get(apiHost)
        .then(getVehiclesComplete)
        .catch(getVehiclesFailed);


        function getSingleDetail(vin) {
          return $http.get(apiHost + vin)
          .then(getDetailComplete)
          .catch(getDetailFailed); 
        }
        function getVehiclesComplete(response) {
          var all = response.data;
          //write the options for nav
          var details = {
            options: {
              'year': year,
              'make': make,
              'model': model,
            },
            data: []
          };

          //search the required vehicles
          angular.forEach(all, function(car, key) {
            if((!year||car.year==year) && (!make||car.make.toLowerCase()==make.toLowerCase()) && (!model||car.model.toLowerCase()==model.toLowerCase())) {
               getSingleDetail(car.vin).then(function(detail){
                  details.data.push(detail);
              }); 
            }
          }, details.data);
          
          return details;
        }

        function getVehiclesFailed(error) {
          $log.error('XHR Failed for getVehicles.\n' + angular.toJson(error.data, true));
        }

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
