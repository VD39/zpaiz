import MainHeader from './header/header.component';
import MainNavigation from './navigation/navigation.component';
import MainFooter from './footer/footer.component';

import LeaderboardController from './leaderboard/leaderboard.controller'; 
import MainLeaderboard from './leaderboard/leaderboard.component';

let componentModule = angular.module('app.components', []);

componentModule.component('mainHeader', MainHeader);
componentModule.component('mainNavigation', MainNavigation);
componentModule.component('mainFooter', MainFooter);

componentModule.controller('LeaderboardController', LeaderboardController);
componentModule.component('mainLeaderboard', MainLeaderboard);

export default componentModule;