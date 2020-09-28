import MathUtils from "./utils/MathUtils";
import DistanceCache from "./structures/DistanceCache";

const EarthRadius = 6371;

export default class DistanceCalculator {

    _cache = new DistanceCache();

    calculate(from, to) {

        const cachedValue = this._cache.get(from.code3, to.code3);

        if (cachedValue) {
            return cachedValue;
        }

        const distance = this._calculateDistance(from, to);
        this._cache.set(from.code3, to.code3, distance);

        return distance;
    }

    _calculateDistance(from, to) {

        // Convert to radians
        const fromLatitudeRad = MathUtils.degToRad(from.latitude);
        const toLatitudeRad = MathUtils.degToRad(to.latitude);
        const fromLongitudeRad = MathUtils.degToRad(from.longitude);
        const toLongitudeInRad = MathUtils.degToRad(to.longitude);

        const latitudeDiff = toLatitudeRad - fromLatitudeRad;
        const longitudeDiff = toLongitudeInRad - fromLongitudeRad;

        const a = Math.sin(latitudeDiff / 2) * Math.sin(latitudeDiff / 2) +
            Math.cos(fromLatitudeRad) * Math.cos(toLatitudeRad) *
            Math.sin(longitudeDiff / 2) * Math.sin(longitudeDiff / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return MathUtils.roundToDecimals(EarthRadius * c, 2);
    }
}