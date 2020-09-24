import Country from "./Country";

export default class CountryLookup {

    _lookup;

    constructor(countryList) {

        this._lookup = {};
        countryList.forEach((rawCountry) => {
            this._lookup[rawCountry['alpha3Code']] = new Country(rawCountry);
        });
    }

    get(countryCode) {
        return this._lookup[countryCode];
    }
}