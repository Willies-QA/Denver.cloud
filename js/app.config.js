(function() {
  'use strict';

  angular.module('app').config(config)

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      }).state({
        name: 'upload',
        url: '/upload',
        component: 'upload'
      }).state({
        name: 'progress',
        url: '/progress',
        component: 'uploadProgress'
      }).state({
        name: 'caption',
        url: '/caption',
        component: 'caption'
      });

    $urlRouterProvider.otherwise('/')
  }
}());
