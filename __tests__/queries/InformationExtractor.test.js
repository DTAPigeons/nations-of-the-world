import InformationExtractor from "../../src/queries/InformationExtractor";

const dataJson = require('./mockData.json');

describe('Information Extractor', () => {

    it('should find distance between two countries', () => {

        const instance = new InformationExtractor(dataJson);

        const distance = instance.findDistance('BWA', 'BOL');

        expect(distance).toBe(9209.09);
    })
});