import CountryManager from "./lookups/CountryManager";
import DistanceCalculator from "./DistanceCalculator";

export default class InformationExtractor {

    _countryManager;
    _distanceCalculator;

    constructor(countryList) {

        this._countryManager = new CountryManager(countryList);
        this._distanceCalculator = new DistanceCalculator();
    }

    /** Find the distance between two countries. */
    findDistance(from, to) {
        return this._distanceCalculator.calculate(
            this._countryManager.get(from),
            this._countryManager.get(to)
        )
    }

    /** Returns all countries in a given timezone range. */
    getInTimezoneRange(fromTz, toTz) {
        return this._countryManager.getInTimezoneRange(fromTz, toTz);
    }

    getWithLetters(letters) {
        return this._countryManager.getWithLetters(letters);
    }
}