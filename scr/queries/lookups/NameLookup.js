import WordCache from "../structures/WordCache";

export default class NameLookup {

    _wordCache;

    constructor(countryList) {

        this._wordCache = new WordCache();

        countryList.forEach((country) => {
            this._wordCache.add(country.name);
        });
    }

    /** Retrieves all countries that have the given characters in their names. */
    withLetters(characters) {
        return this._wordCache.find(characters);
    }
}