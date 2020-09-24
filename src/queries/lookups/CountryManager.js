import Country from "../Country";
import CodeLookup from "./CodeLookup";
import {TimezoneLookup} from "./TimezoneLookup";

export default class CountryManager {

    _countries;
    _codeLookup;
    _timezoneLookup;

    constructor(countryList) {

        this._countries = countryList.map((rawCountry) => { return new Country(rawCountry); })

        this._codeLookup = new CodeLookup(this._countries);

        this._timezoneLookup = new TimezoneLookup(this._countries);
    }

    /** Retrieves a country by its 3-symbol code. */
    get(countryCode) {
        return this._codeLookup.get(countryCode);
    }

    getInTimezoneRange(from, to) {
        return this._timezoneLookup.inRange(from, to);
    }
}