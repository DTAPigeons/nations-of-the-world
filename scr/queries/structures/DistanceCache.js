export default class DistanceCache {

    _cache = {};

    constructor() {}

    get(from, to) {
        if (!(from in this._cache)) { return null; }

        const fromCache = this._cache[from];

        if (!(to in fromCache)) { return null; }

        return fromCache[to];
    }

    set(from, to, value) {

        let fromCache;
        if (from in this._cache) {
            fromCache = this._cache[from];
        }
        else {
            fromCache = {};
            this._cache[from] = fromCache;
        }

        fromCache[to] = value;
    }
}