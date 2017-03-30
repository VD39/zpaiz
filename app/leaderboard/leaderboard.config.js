function LeaderboardConfig($stateProvider) {

  $stateProvider
    .state('app.leaderboard', {
      url: '/leaderboard',
      template: require('./leaderboard.html'),
      title: 'Leaderboard'
    });

}

LeaderboardConfig.$inject = ['$stateProvider'];

export default LeaderboardConfig;
