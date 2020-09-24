import InformationExtractor from "../../src/queries/InformationExtractor";

const dataJson = require('./mockData.json');

describe('Information Extractor', () => {

    const instance = new InformationExtractor(dataJson);

    it('should find distance between two countries', () => {

        const distance = instance.findDistance('BWA', 'BOL');

        expect(distance).toBe(9209.09);
    });

    it('should find all countries in a given timezone range', () => {

        const inRange = instance.getInTimezoneRange('UTC-05:00', 'UTC-07:00');

        expect(inRange.length).toBe(28);
        expect(inRange).toContain('USA');
        expect(inRange).toContain('BLZ');
    });

    it('should find all countries with names containing the letters', () => {

        const withLetters = instance.getWithLetters('KA');

        expect(withLetters.length).toBe(2);
        expect(withLetters).toContain('Kazakhstan');
        expect(withLetters).toContain('Sri Lanka');
    });
});