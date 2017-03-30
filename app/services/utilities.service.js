class UtilitiesService {
    constructor() {}

    //Taken from http://grainier.net/shuffle-array-javascript/
    shuffleArray(array) {
        var counter = array.length, temp, index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    /**
     * Sorts the object determined by the sortby value
     * @param {object} obj 
     * @param {string} sortedBy 
     */
    sortObject(obj, sortedBy) {
        let sortable = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                sortable.push(obj[key]);
            }
        }

        return sortable.sort((a, b) => {
            return b[sortedBy] - a[sortedBy];
        });
    }
}

export default UtilitiesService;