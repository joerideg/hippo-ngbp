(function () {
  'use strict';

  function config ($stateProvider) {
    $stateProvider.state('main.sub', {
      url: 'sub/',
      templateUrl: 'app/components/sub/sub.tpl.html',
      controller: 'SubCtrl',
      controllerAs: 'sub'
    });
  }

  angular
    .module('sub', ['ui.router'])
    .config(config);
})();