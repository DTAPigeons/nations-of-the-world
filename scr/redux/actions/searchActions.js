export function findDistance(firstCountry,secondCountry){
    return {
        type: "FIND_DISTANCE_ACTION",
        payload: {
            firstCountry,
            secondCountry
        }
    }
}