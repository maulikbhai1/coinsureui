// import {$, jQuery} from 'jquery';
// window.$ = $;
// window.jQuery = jQuery;

import angular from 'angular';
import 'angular-sanitize'
import 'angular-route'
import 'angular-resource'
import 'angular-clipboard'


import './modules/exchange/exchange.index';

import './shared/directives/components';
import './shared/directives/header/header.module';
import './shared/directives/buySell/buySell.module';
import './shared/directives/chartComponent/chartComponent.module';
import './shared/directives/customDropdown/customDropdown.module';
import './shared/directives/orderBook/orderBook.module';
import './shared/directives/orderHistory/orderHistory.module';
import './shared/directives/orderList/orderList.module';
import './shared/directives/selectMenu/selectMenu.module';
import './shared/directives/tradingProduct/tradingProduct.module';
import './shared/directives/popupVerification/popupVerification.module';
import './shared/directives/wallet/wallet.module';
import './shared/directives/tip/tip.module';
import './shared/directives/login/login.module';
import './shared/directives/signUp/signUp.module';
import './shared/directives/forgotPassword/forgotPassword.module';
import './shared/directives/resetPassword/resetPassword.module';
import './shared/directives/identity/identity.module';

import './shared/services/coopex.services'
import CountryCtrl from './shared/services/country.service'

// Custom styles
import '../assets/styles/application.less';

const CoopexApp = angular.module('coopex', [
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'angular-clipboard',

    'coopex.exchange',
    'coopex.components',
    'coopex.services'
]);

CoopexApp.service('CountryCtrl', CountryCtrl);

CoopexApp.config(['$routeProvider', '$locationProvider', '$httpProvider',

    ($routeProvider, $locationProvider, $httpProvider) => {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $routeProvider
            .otherwise({
                redirectTo: '/',
            });
    }

]);

