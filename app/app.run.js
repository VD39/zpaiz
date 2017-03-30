function AppRun($rootScope) {

  function setTitle(title) {
    $rootScope.pageTitle = '';
    if (title) {
      $rootScope.pageTitle += title + ' - ';
    }

    $rootScope.pageTitle += 'ZPAIZ';
  }

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    setTitle(toState.title);
  });
}

AppRun.$inject = ['$rootScope'];

export default AppRun;