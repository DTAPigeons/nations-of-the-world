import DistanceCalculator from "./DistanceCalculator";
import Country from "./Country";
import CodeLookup from "./lookups/CodeLookup";
import TimezoneLookup from "./lookups/TimezoneLookup";
import NameLookup from "./lookups/NameLookup";
import NearestCountryLookup from "./lookups/NearestCountryLookup";

export default class InformationExtractor {

    _countries;

    _codeLookup;

    _timezoneLookup;

    _nameLookup;

    _nearestLookup;

    _distanceCalculator;

    constructor(countryList) {

        this._distanceCalculator = new DistanceCalculator();

        this._countries = countryList.map((rawCountry) => { return new Country(rawCountry); })

        this._codeLookup = new CodeLookup(this._countries);

        this._timezoneLookup = new TimezoneLookup(this._countries);

        this._nameLookup = new NameLookup(this._countries);

        this._nearestLookup = new NearestCountryLookup(this._countries, this._distanceCalculator);
    }

    /** Find the distance between two countries. */
    findDistance(from, to) {
        return this._distanceCalculator.calculate(
            this._codeLookup.get(from),
            this._codeLookup.get(to)
        )
    }

    /** Finds the country nearest to the given one that is not one of its neighbours. */
    findNearestNonNeighbour(countryCode) {
        return this._nearestLookup.findNearestNonNeighbour(
            this._codeLookup.get(countryCode)
        );
    }

    /** Returns all countries in a given timezone range. */
    findInTimezoneRange(fromTz, toTz) {
        return this._timezoneLookup.inRange(fromTz, toTz);
    }

    /** Retrieves all countries that have the given characters in their names. */
    findWithCharacters(letters) {
        return this._nameLookup.withCharacters(letters);
    }
}