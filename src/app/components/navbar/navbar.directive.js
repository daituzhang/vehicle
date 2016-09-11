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
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
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
      console.log(vm.model);
      vm.selected = {id:vm.model, name:vm.model};

      // "vm.creationDate" is available by directive option "bindToController: true"
    }
  }

})();
