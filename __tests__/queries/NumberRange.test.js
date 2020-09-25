import NumberRange from "../../scr/queries/utils/NumberRange";

describe('Number Range', () => {

    it('should return true when the range contains a number', () => {

        const instance = new NumberRange(-5, -7);

        expect(instance.contains(-6)).toBe(true);
        expect(instance.contains(5)).toBe(false);
    });
});