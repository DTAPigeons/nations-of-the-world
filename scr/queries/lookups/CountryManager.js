import Country from "../Country";
import CodeLookup from "./CodeLookup";
import {TimezoneLookup} from "./TimezoneLookup";
import NameLookup from "./NameLookup";

export default class CountryManager {

    _countries;
    _codeLookup;
    _timezoneLookup;
    _nameLookup;

    constructor(countryList) {

        this._countries = countryList.map((rawCountry) => { return new Country(rawCountry); })

        this._codeLookup = new CodeLookup(this._countries);

        this._timezoneLookup = new TimezoneLookup(this._countries);

        this._nameLookup = new NameLookup(this._countries);
    }

    /** Retrieves a country by its 3-symbol code. */
    get(countryCode) {
        return this._codeLookup.get(countryCode);
    }

    /** Returns the codes of all countries that fall within the given timezone range. */
    getInTimezoneRange(from, to) {
        return this._timezoneLookup.inRange(from, to);
    }

    /** Returns the name of all countries that contain the given letters. */
    getWithLetters(letters) {
        return this._nameLookup.withLetters(letters);
    }
}