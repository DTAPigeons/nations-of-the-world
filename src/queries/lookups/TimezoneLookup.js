import NumberRange from "../utils/NumberRange";

export class TimezoneLookup {

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

    _timezoneToNumber(timezone) {
        return Number(timezone.substr(3).replace(':', '.'));
    }
}