/**
 * Created by admin on 2016/8/21.
 */
(function () {
    'use strict';
    angular.module('starter').controller('resultController', resultController);
    function resultController($state, userInfo) {
        var vm = this,
            mydate,
            date,
            myStorage;
        vm.submit = submit;
        vm.money = userInfo.money;
        vm.phoneNum = userInfo.phoneNum;
        vm.money = userInfo.money;
        vm.returnHome = returnHome;

        myStorage = localStorage.myStorage;
        date = new Date();
        mydate = date.getMinutes();
        vm.phoneNum = userInfo.phoneNum;
        localStorage.myStorage = mydate + '#' + vm.phoneNum +'#'+vm.money+ '|' + myStorage;
        //   localStorage.clear();
        function submit() {
            $state.go('pay');
        }

        function returnHome() {
            $state.go('home');
        }
    }
})();
