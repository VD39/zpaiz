function GameplayConfig($stateProvider) {

  $stateProvider
    .state('app.gameplay', {
      url: '/gameplay',
      controller: 'GameplayController',
      controllerAs: '$ctrl',
      template: require('./gameplay.html'),
      title: 'Gameplay'
    });

}

GameplayConfig.$inject = ['$stateProvider'];

export default GameplayConfig;
