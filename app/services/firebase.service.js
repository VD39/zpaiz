class FirebaseService {
    constructor($http, $q, UtilitiesService, localStorageService) {

        this._$http = $http;
        this._$q = $q;
        this._UtilitiesService = UtilitiesService;
        this._localStorageService = localStorageService;

        const baseUrl = 'https://word-game-e597c.firebaseio.com/';
        this.urls = {
            'scores': baseUrl + 'scores.json',
            'words': baseUrl + 'words.json'
        }

    }

    /**
     * Returns a JSON set of words from the local storage or firebase if no local storage exist
     */
    getWords() {

        //checks local storage first and returns JSON of words
        if (this._localStorageService.get('words')) {
            var deferred = this._$q.defer();
            deferred.resolve(JSON.parse(this._localStorageService.get('words')));
            return deferred.promise;
        }

        //returns JSON set of words from firebase, and sets local storage
        return this._$http.get(this.urls.words)
            .then((response) => {
                this._localStorageService.set('words', JSON.stringify(response.data));
                return response.data;
            })
            .catch((error) => {
                console.log('XHR Failed for getWords.', error);
            });

    }

    /**
     * Returns a set of scores determined by the max input
     * @param {number} max 
     */
    getScores(max) {

        return this._$http.get(this.urls.scores)
            .then((response) => {
                const sorted = this._UtilitiesService.sortObject(response.data, 'score');
                return sorted.slice(0, max)
            })
            .catch((error) => {
                console.log('XHR Failed for getWords.', error);
            });

    }

    /**
     * Adds score to firebase
     * @param {string} name 
     * @param {number} score 
     * @param {number} wordsUnmangled 
     */
    addScores(name, score, wordsUnmangled) {

        if (score === 0) {
            return;
        }

        let data = {
            'name': name,
            'score': score,
            'word_count': wordsUnmangled
        };

        this._$http.post(this.urls.scores, data)
            .catch((error) => {
                console.log('XHR Failed for getWords.', error);
            });

    }
}

FirebaseService.$inject = ['$http', '$q', 'UtilitiesService', 'localStorageService'];

export default FirebaseService;