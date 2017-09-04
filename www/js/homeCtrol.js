(function () {
  'use strict';
  angular.module('starter').controller('homeCtrol', homeCtrol);
  function homeCtrol($scope, $state, userInfo) {
    var vm = this,
      sign = true,
      buttons = document.getElementsByClassName('button-outline');
    vm.moneyInfo = userInfo.moneyInfo;
    vm.phoneNum = '';
    vm.submit = submit;
    vm.histor = histor;
    $scope.$watch('vm.phoneNum', watch);
    function submit(money) {
      userInfo.money = money;
      $state.go('pay');
    }

    function watch() {
      if (vm.phoneNum.length == 11) {
        if ((/^1\d{10}$/).test(vm.phoneNum)) {
          sign = false;
          userInfo.phoneNum = vm.phoneNum;
          vm.info = '';
        } else {
          vm.info = '手机号填写错误';
        }
      }
      else {
        vm.info = '';
        sign = true;
      }
      for (var buttonLength = buttons.length - 1, i = buttonLength; i >= 0; i--) {
        buttons[i].disabled = sign;
      }
    }

    function histor() {
      $state.go('history');
    }
  }

})();
