
export default class MathUtils {


    static degToRad(value) {
        return value * Math.PI / 180;
    }

    static roundToDecimals(value, numDecimals) {
        const multiplier = Math.pow(10, numDecimals);
        return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
    }
}