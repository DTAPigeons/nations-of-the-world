
export default class Country {

    _data;

    constructor(countryData) {
        this._data = countryData;
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
}