import DistanceCache from "../../../scr/queries/structures/DistanceCache";


describe('Distance Cache', () => {

    it('should return null if the key is not cached', () => {

        const instance = new DistanceCache();

        instance.set('FIRST', 'SECOND', 5);

        expect(instance.get('FIRST', 'THIRD')).toBeNull();
    });

    it("should return the cached value if 'from' and 'to' are swapped", () => {

        const instance = new DistanceCache();

        instance.set('FIRST', 'SECOND', 5);

        expect(instance.get('SECOND', 'FIRST')).toEqual(5);
        expect(instance.get('FIRST', 'SECOND')).toEqual(instance.get('SECOND', 'FIRST'));
    });
});