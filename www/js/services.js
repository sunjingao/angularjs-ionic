angular.module('starter')

    .factory('userInfo', function () {
        var userInfo = {
            phoneNum: '',
            money: '',
            moneyInfo: []
        };
        userInfo.moneyInfo = [
            [
                {'price': 10, 'nowPrice': 10},
                {'price': 20, 'nowPrice': 19.95},
                {'price': 30, 'nowPrice': 29.95}
            ],
            [
                {price: 50, nowPrice: 49.75},
                {price: 100, nowPrice: 99.50},
                {price: 200, nowPrice: 199.00}
            ],
            [
                {price: 300, nowPrice: 299.00},
                {price: 500, nowPrice: 499.00},
            ]
        ]
        return userInfo;
    });

