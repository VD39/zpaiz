function HomeConfig($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/',
      template: require('./home.html'),
      title: 'Home'
    });

}

HomeConfig.$inject = ['$stateProvider'];

export default HomeConfig;
