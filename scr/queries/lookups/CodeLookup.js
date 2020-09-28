import InvalidArgumentError from "../exceptions/InvalidArgumentError";

export default class CodeLookup {

    _lookup = {};

    constructor(countryList) {

        countryList.forEach((country) => {
            this._lookup[country.code3] = country;
        });
    }

    get(countryCode) {
        if (!(countryCode in this._lookup)) { throw new InvalidArgumentError(`${countryCode} is not a valid three-letter country code`); }

        return this._lookup[countryCode];
    }
}