/**
 * Created by admin on 2016/8/21.
 */
(function () {
  'use strict';
  angular.module('starter').controller('payController', payController);
  function payController($state, $scope, $timeout, $ionicLoading) {
    var vm = this;
    vm.submit = submit;
    $scope.$watch('vm.account', watch);
    $scope.$watch('vm.password', watch);
    function watch() {
      if ((vm.account.length === 11) && (vm.password.length === 6)) {
        //document.getElementsByClassName('button-block')[0].disabled = false;
        document.getElementsByClassName('button-block')[0].disabled = false;
      } else {
        document.getElementsByClassName('button-block')[0].disabled = true;
      }
    }

    function submit() {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      $timeout(function () {
        $ionicLoading.hide();
        $state.go('result');
      }, 2000);

    }
  }
})();
