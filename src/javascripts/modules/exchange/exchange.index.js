import angular from 'angular';

import exchangeTmpl from './exchange.html';
import { ExchangeCtrl } from './exchange.controller';


angular.module('coopex.exchange', [])

    .config(['$routeProvider', ($routeProvider) => {

        $routeProvider
            .when('/', {
                template: exchangeTmpl,
                controller: 'ExchangeCtrl as vm'
            })
    }])

    .controller('ExchangeCtrl', ExchangeCtrl);
