import CountryManager from "./lookups/CountryManager";
import DistanceCalculator from "./DistanceCalculator";

export default class InformationExtractor {

    _lookup;
    _distanceCalculator;

    constructor(countryList) {

        this._lookup = new CountryManager(countryList);
        this._distanceCalculator = new DistanceCalculator();
    }

    /** Find the distance between two countries. */
    findDistance(from, to) {
        return this._distanceCalculator.calculate(
            this._lookup.get(from),
            this._lookup.get(to)
        )
    }

    /** Returns all countries in a given timezone range. */
    getInTimezoneRange(fromTz, toTz) {
        return this._lookup.getInTimezoneRange(fromTz, toTz);
    }
}