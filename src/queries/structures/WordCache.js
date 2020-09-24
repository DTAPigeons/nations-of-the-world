export default class WordCache {

    _treeRoot = {};

    constructor() { }

    /** Adds a word to the registry. */
    add(word) {

        for (let i = 0; i < word.length - 1; i++) {

            this._addToTree(word.substr(i, 2), word);
        }
    }

    _addToTree(letters, word) {

        let currentNode = this._treeRoot;

        for(let i = 0; i < letters.length; i++) {

            const letter = letters.charAt(i).toLowerCase();

            if(!(letter in currentNode)) {
                currentNode[letter] = {};
                currentNode[letter]['words'] = [];
            }

            currentNode[letter]['words'].push(word);
            currentNode = currentNode[letter];
        }
    }

    /** Retrieves all words that contain the given letters. */
    find(letters) {

        let currentNode = this._treeRoot;
        // let words = [];

        for(let letter of letters) {
            letter = letter.toLowerCase();

            if(!(letter in currentNode)) { return []; }

            currentNode = currentNode[letter];
        }

        return currentNode['words'];
    }
}