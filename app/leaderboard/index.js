import LeaderboardConfig from './leaderboard.config';

let leaderboardModule = angular.module('app.leaderboard', []);

leaderboardModule.config(LeaderboardConfig);

export default leaderboardModule;
