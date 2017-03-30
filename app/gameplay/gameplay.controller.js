class GameplayController {
  constructor($interval, FirebaseService, UtilitiesService) {

    this._$interval = $interval;
    this._UtilitiesService = UtilitiesService;
    this._FirebaseService = FirebaseService;

    this.time = 40;
    this.warning = false;
    this.loading = true;
    this.gameStarted = false;
    this.shuffledWords;
    this.currentWord;
    this.currentScore = 0;
    this.wordsUnmangled = 0;

    this.init();

  }

  /**
   * Gets a word from the array 
   */
  getWord() {
    this.currentWord = this._UtilitiesService.shuffleArray(this.shuffledWords[0].split(''));
    this.tempNumber = this.getWordScore(this.shuffledWords[0]);
    this.maxNumber = this.tempNumber;
  }

  /**
   * Initialises the game to start
   */
  init() {

    this._FirebaseService.getWords()
      .then((words) => {
        return this._UtilitiesService.shuffleArray(words); //shuffle the words array returned
      })
      .then((shuffledWords) => {
        this.shuffledWords = shuffledWords;
        this.loading = false;
        this.getWord();
      })
      .catch((error) => {
        console.log('XHR Failed for getWords.', error);
      });

  }

  /**
   * Starts the 40 seconds timer
   */
  startTimer() {

    this.test = this._$interval(() => {
      this.time--;
      this.timer(this.time);
    }, 1000);

  }

  /**
   * Starts the game
   */
  startGame() {
    this.gameStarted = true;
    this.startTimer();
  }

  /**
   * Checks the word from the input field
   * @param {event} event 
   */
  checkWord(event) {

    //check if word is deleted and number is not negative
    if (event.keyCode === 8 && this.tempNumber > 0) {
      this.tempNumber -= 1;
    }

    //check if the word entered is correct
    if (this.userInput.toLowerCase() === this.shuffledWords[0]) {
      this.userInput = '';
      this.shuffledWords.shift();
      this.wordsUnmangled += 1;
      this.updateScore(this.tempNumber);
      this.getWord();
    }
  }

  /**
   * Returns the total available score
   * @param {string} word 
   */
  getWordScore(word) {
    const length = word.length;
    return Math.floor(Math.pow(1.95, (length / 3)));
  }

  /**
   * Updates the current score
   * @param {number} score 
   */
  updateScore(score) {
    this.currentScore += score;
  }

  /**
   * Checks the timer number
   * @param {number} currentTime 
   */
  timer(currentTime) {

    //displays warning if less than 10 seconds
    if (currentTime <= 10) {
      this.warning = true;
    }

    //ends the game and submits the score
    if (currentTime === 0) {
      this._$interval.cancel(this.test);
      this.complete = true;
      this._FirebaseService.addScores(this.name, this.currentScore, this.wordsUnmangled); //submits scores
    }
  }

}

GameplayController.$inject = ['$interval', 'FirebaseService', 'UtilitiesService'];

export default GameplayController;
