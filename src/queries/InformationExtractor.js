import CountryLookup from "./CountryLookup";
import DistanceCalculator from "./DistanceCalculator";

export default class InformationExtractor {

    _lookup;
    _distanceCalculator;

    constructor(countryList) {

        this._lookup = new CountryLookup(countryList);
        this._distanceCalculator = new DistanceCalculator();
    }

    findDistance(from, to) {
        return this._distanceCalculator.calculate(
            this._lookup.get(from),
            this._lookup.get(to)
        )
    }
}