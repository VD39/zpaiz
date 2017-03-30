class LeaderboardController {
  constructor(FirebaseService) {

    this.loading = true;

    this.$onInit = function () {
      const max = this.max;

      FirebaseService.getScores(max)
        .then((response) => {
          this.topScores = response;
          this.loading = false;
        })
        .catch((error) => {
          console.log('XHR Failed for getWords.', error);
        });

    };
  }
}

LeaderboardController.$inject = ['FirebaseService'];

export default LeaderboardController;
