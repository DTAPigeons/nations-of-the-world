import WordCache from "../../scr/queries/structures/WordCache";


describe('B Tree', () => {

    it('Should retrieve words containing given letters', () => {

        const instance = new WordCache();

        instance.add('Testor');
        instance.add('Tos');
        instance.add('BBARtso');
        instance.add('dasdad     asdasd233132');
        instance.add('12312___2132');

        const words = instance.find('to');

        expect(words.length).toBe(2);
        expect(words).toContain('Testor');
        expect(words).toContain('Tos');
    });
});