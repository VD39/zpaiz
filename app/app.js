import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LocalStorageModule from 'angular-local-storage';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';

import AppRun from './app.run';
import servicesModule from './services/index';
import componentModule from './components/index';

import homeModule from './home/index';
import gameplayModule from './gameplay/index';
import leaderboardModule from './leaderboard/index';

const dependencies = [
  uiRouter,
  LocalStorageModule,
  componentModule.name,
  servicesModule.name,
  homeModule.name,
  gameplayModule.name,
  leaderboardModule.name
];

const app = angular.module('app', dependencies);

app.run(AppRun);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $stateProvider
      .state('app', {
        abstract: true,
        template: require('./layout/layout.html')
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.otherwise('/');
  }]);