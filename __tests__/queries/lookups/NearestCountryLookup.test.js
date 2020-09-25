import Country from "../../../scr/queries/Country";
import NearestCountryLookup from "../../../scr/queries/lookups/NearestCountryLookup";
import DistanceCalculator from "../../../scr/queries/DistanceCalculator";

const dataJson = require('../mockData.json');

describe('Nearest Country Lookup', () => {


    it('should find the nearest country that is not a neighbour', () => {

        const countries = dataJson.map((rawCountry) => { return new Country(rawCountry); })

        const instance = new NearestCountryLookup(countries, new DistanceCalculator());

        const andorra = countries[5];

        const result = instance.findNearestNonNeighbour(andorra);

        console.log(result);
        // const result = instance
    });
});