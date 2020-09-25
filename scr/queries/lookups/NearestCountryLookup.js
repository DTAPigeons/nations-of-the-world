
export default class NearestCountryLookup {

    _countryList;
    _distanceCalculator;

    constructor(countryList, distanceCalculator) {

        this._countryList = countryList;
        this._distanceCalculator = distanceCalculator;
    }

    findNearestNonNeighbour(country) {

        let minDistance = Number.MAX_SAFE_INTEGER;
        let nearest = null;

        this._countryList.forEach((otherCountry) => {

            if(country === otherCountry) { return; }

            if(country.isNeighboursWith(otherCountry)) { return; }

            const distance = this._distanceCalculator.calculate(country, otherCountry);

            if(distance < minDistance) {
                minDistance = distance;
                nearest = otherCountry;
            }
        });

        return nearest;
    }
}