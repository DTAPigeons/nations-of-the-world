import MathUtils from "./MathUtils";

export default class NumberRange {

    _from;
    _to;

    constructor(from, to) {
        this._from = MathUtils.min(from, to);
        this._to = MathUtils.max(from, to);
    }

    contains(number) {
        return (this._from <= number && number <= this._to);
    }
}