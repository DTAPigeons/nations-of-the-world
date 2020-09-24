import CountryLookup from "../../src/queries/CountryLookup";

const dataJson = require('./mockData.json');

describe('Country Lookup', () => {

    it('Should return a country by its 3 symbol code', () => {

        const instance = new CountryLookup(dataJson);

        const country = instance.get('BWA');

        expect(country).not.toBe(undefined);

        expect(country.latitude).toBe(-22);
        expect(country.longitude).toBe(24);
    })
});