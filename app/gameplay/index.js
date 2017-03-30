import GameplayConfig from './Gameplay.config';
import GameplayController from './Gameplay.controller';

let gameplayModule = angular.module('app.gameplay', []);

gameplayModule.controller('GameplayController', GameplayController);
gameplayModule.config(GameplayConfig);

export default gameplayModule;
