export default class CodeLookup {

    _lookup = {};

    constructor(countryList) {

        countryList.forEach((country) => {
            this._lookup[country.code3] = country;
        });
    }

    get(countryCode) {
        return this._lookup[countryCode];
    }
}