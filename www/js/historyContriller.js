/**
 * Created by admin on 2016/8/21.
 */
(function () {
    'use strict';
    angular.module('starter').controller('historyController', historyController);
    function historyController($state) {
        var vm = this,
            historys,
            historysStorage = localStorage.myStorage;
        vm.gohistory = gohistory;
      vm.gohome = gohome;
        if (historysStorage === undefined) {
            alert('暂无数据');
        } else {
            historys = historysStorage.split('|');
            historys.length = historys.length - 1;
            for (var length = historys.length - 1; length >= 0; length--) {
                var tep = historys[length].split('#');
                historys[length] = {};
                historys[length].time = tep[0];
                historys[length].phoneNum = tep[1];
                historys[length].money = tep[2];
                vm.historys = historys;
            }
        }
        function gohistory() {
            $state.go('history');
        }
      function gohome(){
        $state.go('home');
      }
    }
})();
