(function() {
  'use strict';

  angular
    .module('vehicle')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          year: '=',
          make: '=',
          model:'='
      },
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($cookies,$window,$scope) {
      var vm = this;

      //write user options to cookie
      vm.setValue = function(value, select) {
        if(select == 'model') {
          vm.model = value;
        }
        $cookies.put('vehicle_' + select,value);
      }


      initModel();
      navScroll();

      //initial the model dropdown
      function initModel(){
        vm.options = {
          'Honda': [
            {id:'Odssey', name:'Odssey'},
            {id:'Civic', name:'Civic'},
            {id:'Accord', name:'Accord'},
            {id:'Pilot', name:'Pilot'},
            {id:'CR-V', name:'CR-V'}
          ],
          'BMW': [
            {id:'3 Series', name:'3 Series'}
          ],
          'Kia': [
            {id:'Forte', name:'Forte'},
            {id:'Soul', name:'Soul'}
          ]
        };
        vm.selected = {id:vm.model, name:vm.model};
      }

      //hide nav when scroll down
      function navScroll (){
        vm.lastScrollTop = 0;
        vm.up = 1;

        angular.element($window).bind("scroll", function() {
          vm.st = window.pageYOffset;
          if (vm.st > vm.lastScrollTop) {
              vm.up = 0;
          } else {
              vm.up = 1;
          }
          $scope.$apply();
          vm.lastScrollTop = vm.st;
        });    
      }
    }
  }
})();
