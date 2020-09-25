import CodeLookup from "../../../scr/queries/lookups/CodeLookup";
import Country from "../../../scr/queries/Country";

const dataJson = require('../mockData.json');

describe('Code Lookup', () => {

    it('Should return a country by its 3 symbol code', () => {

        const countries = dataJson.map((rawCountry) => { return new Country(rawCountry); })

        const instance = new CodeLookup(countries);

        const country = instance.get('BWA');

        expect(country).not.toBe(undefined);

        expect(country.latitude).toBe(-22);
        expect(country.longitude).toBe(24);
    })
});