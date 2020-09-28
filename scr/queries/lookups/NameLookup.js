import WordCache from "../structures/WordCache";
import InvalidArgumentError from "../exceptions/InvalidArgumentError";

export default class NameLookup {

    _wordCache;

    constructor(countryList) {

        this._wordCache = new WordCache();

        countryList.forEach((country) => {
            this._wordCache.add(country.name);
        });
    }

    /** Retrieves all countries that have the given characters in their names. */
    withCharacters(letters) {

        if (!letters || !letters.length || (letters.length !== 1 && letters.length !== 2)) {
            throw new InvalidArgumentError('Search by characters can only be done with one or two characters.');
        }

        return this._wordCache.find(letters);
    }
}