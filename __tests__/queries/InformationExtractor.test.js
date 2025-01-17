import InformationExtractor from "../../scr/queries/InformationExtractor";

const dataJson = require('./mockData.json');

describe('Information Extractor', () => {

    const instance = new InformationExtractor(dataJson);

    it('should find distance between two countries', () => {

        expect(instance.findDistance('BWA', 'BOL')).toBe(9209.09);
        expect(instance.findDistance('AUS', 'BRB')).toBe(17998.46);
    });

    it('should find the nearest non-neighbour for a given country', () => {

        expect(instance.findNearestNonNeighbour('AND').code3).toEqual('MCO'); // Andorra -> Monaco
        expect(instance.findNearestNonNeighbour('NZL').code3).toEqual('NFK'); // New Zealand -> Norfolk Island
    });

    it('should find all countries in a given timezone range', () => {

        const inRange = instance.findInTimezoneRange('UTC-05:00', 'UTC-07:00');

        expect(inRange.length).toBe(22);
        expect(inRange).toContain('United States of America');
        expect(inRange).toContain('Guatemala');
    });

    it('should find all countries with names containing the letters', () => {

        const withLetters = instance.findWithCharacters('KA');

        expect(withLetters.length).toBe(2);
        expect(withLetters).toContain('Kazakhstan');
        expect(withLetters).toContain('Sri Lanka');
    });
});