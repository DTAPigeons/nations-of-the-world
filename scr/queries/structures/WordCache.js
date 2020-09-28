export default class WordCache {

    _cache = {};

    constructor() { }

    /** Adds a word to the registry. */
    add(word) {

        for (let i = 0; i < word.length; i++) {

            const letter = word.charAt(i).toLowerCase();
            if (/\s/.test(letter)) { continue; }

            this._addToCache(letter, word);
        }

        for (let i = 0; i < word.length - 1; i++) {
            this._addToCache(word.substr(i, 2).toLowerCase(), word);
        }
    }

    _addToCache(key, word) {

        if (!(key in this._cache)) {
            this._cache[key] = [];
        }

        const cacheArr = this._cache[key];

        if (cacheArr.includes(word)) { return; }

        cacheArr.push(word);
    }

    /** Retrieves all words that contain the given letters. */
    find(letters) {

        letters = letters.toLowerCase();

        if (!(letters in this._cache)) {
            return [];
        }

        return this._cache[letters];
    }
}