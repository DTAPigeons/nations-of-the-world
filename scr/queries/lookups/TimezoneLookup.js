import NumberRange from "../utils/NumberRange";
import InvalidArgumentError from "../exceptions/InvalidArgumentError";

export default class TimezoneLookup {

    _timezones = {};

    constructor(countryList) {

        countryList.forEach((country) => {
            this._addCountry(country);
        });
    }

    _addCountry(country) {

        country.timezones.forEach((timezone) => {

            if(!(timezone in this._timezones)) { this._timezones[timezone] = []; }

            this._timezones[timezone].push(country.code3);
        })
    }

    /** Returns all countries in a given timezone range. */
    inRange(fromTimezone, toTimezone) {

        this._validateTimezone(fromTimezone);
        this._validateTimezone(toTimezone);

        const range = new NumberRange(
            this._timezoneToNumber(fromTimezone),
            this._timezoneToNumber(toTimezone)
        );

        const timezoneNames = Object.keys(this._timezones);

        const timezonesInRange = timezoneNames.filter((timezone) => {
            return range.contains(this._timezoneToNumber(timezone));
        })

        return [].concat(...timezonesInRange.map((timezone) => {
            return this._timezones[timezone];
        }))
    }

    _validateTimezone(timezone) {

        if(!(/^UTC(?:[+|-][0-1][0-9](?:\:[0-5][0-9])?)?$/.test(timezone))) {
            throw new InvalidArgumentError(`${timezone} is not a valid timezone format.`);
        }
    }

    _timezoneToNumber(timezone) {
        return Number(timezone.substr(3).replace(':', '.'));
    }
}