import HomeConfig from './home.config';

let homeModule = angular.module('app.home', []);

homeModule.config(HomeConfig);

export default homeModule;
