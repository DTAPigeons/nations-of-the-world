export default class Country {

    _data;

    constructor(countryData) {
        this._data = countryData;
    }

    isNeighboursWith(country) {
        return this._data['borders'].includes(country.code3);
    }

    get name() {
        return this._data['name'];
    }

    get code3() {
        return this._data['alpha3Code'];
    }

    get latitude() {
        return this._data['latlng'][0];
    }

    get longitude() {
        return this._data['latlng'][1];
    }

    get timezones() {
        return this._data['timezones'];
    }
}