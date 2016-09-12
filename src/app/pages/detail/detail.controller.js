(function() {
  'use strict';

  angular
    .module('vehicle')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(detailData,$log) {
    var vm = this;
    vm.noResult = false;

    //if didn't get data show no results
    if(detailData){
      vm.detail = detailData;
      vm.ifPhoto = vm.detail.mediumResPhotos.length > 0 && vm.detail.mediumResPhotos[0] != '' ? true : false;
      slide();
      priceChart();
      map();
    }
    else {
      vm.noResult = true;
    }

    //initial map based on latitude and longitude
    function map() {
      vm.map = { center: { latitude: vm.detail.latitude, longitude: vm.detail.longitude }, zoom: 8 };
      vm.marker = {
        id: 0,
        coords: {
          latitude: vm.detail.latitude,
          longitude: vm.detail.longitude
        }
      }
    }

    //slide controller
    function slide() {
      vm.slideCur = 0;
      vm.slideLength = vm.detail.mediumResPhotos.length;
      vm.slideLeft = function() {
        vm.slideCur = vm.slideCur == 0 ? vm.slideLength - 1 : vm.slideCur - 1;
      }
      vm.slideRight = function() {
        vm.slideCur = vm.slideCur == vm.slideLength - 1 ? 0 : vm.slideCur + 1;
      }
    }

    //generate price chart using highcharts
    function priceChart() {
      vm.priceDate = [];
      for (var i = 0; i < 20; i++) { 
        vm.priceDate.push(moment().subtract(20 - i - 1,'days').format('MM/DD'));    
      } 
      vm.priceDate.push('today');
      vm.detail.priceHistory =  vm.detail.priceHistory.reverse();
      vm.detail.priceHistory.push(vm.detail.salePrice)
      Highcharts.chart('price-history', {
        credits: {
          enabled: false
        },
        title:  {
          text: 'Recent 20 Days Price'
        },
        xAxis: {
          title: {
            text: 'Date'
          },
          categories: vm.priceDate
        },
        yAxis: {
          title: {
            text: 'Price'
          }
        },
        series: [{
          data: vm.detail.priceHistory,
          showInLegend: false
        }]
      });
    }
  }
})();
