import Country from "../../scr/queries/Country";

describe('Country', () => {

    it('can determine if another country is its neighbour', () => {

        const firstCountry = new Country({
            alpha3Code : 'NAM',
            borders : [
                'ZAF',
                'ZMB'
            ]
        });

        const secondCountry = new Country({
            alpha3Code : 'ZAF',
            borders : [
                'NAM',
            ]
        });

        const thirdCountry = new Country({
            alpha3Code : 'TES',
            borders : []
        });

        expect(firstCountry.isNeighboursWith(secondCountry)).toEqual(true);
        expect(firstCountry.isNeighboursWith(thirdCountry)).toEqual(false);
    });
})