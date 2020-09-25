export function findDistanceAction(from,to){
    return (dispatch, getState) =>{
        const state = getState(); 
        const type = "FIND_DISTANCE_ACTION";
        try{
            const result = state.autReducer.extractor.findDistance(from,to);
            dispatch({
                type: type,
                payload: {
                            distance: result,
                            error: ""
                        }
            })
        }
        catch{
            dispatch({
                type: type,
                payload: {
                            distance: undefined,
                            error: "Invalid Input"
        }
            })
        }
    }
}

export function findNearestNonNeighbourAction(code){
    return (dispatch, getState)=>{
        const state = getState();
        const type = "FIND_NEAREST_ACTION";
        try {
            const result = state.autReducer.extractor.findNearestNonNeighbour(code);
            dispatch({
                type: type,
                payload: {
                            nearest: result,
                            error: ""
                        }
            })
        } catch (e) {
            dispatch({
                type: type,
                payload: {
                            nearest: undefined,
                            error: "Invalid Input"
        }
            })
        }
    }
}

export function findTimeZoneRangeAction(from, to){
    return (dispatch,getState)=>{
        const state = getState();
        const type = "FIND_TIME_ZONE_RANGE_ACTION";
        try{
            const result = state.autReducer.extractor.findInTimezoneRange(from,to);
            dispatch({
                type: type,
                payload: {
                            range: result,
                            error: ""
        }
            })
        }
        catch(e){
            dispatch({
                type: type,
                payload: {
                            range: [],
                            error: "Invalid Input"
        }
            })
        }
    }
}

export function findWithCharactersAction(chars){
    return (dispatch,getState)=>{
        const state = getState();
        const type = "FIND_WITH_CHARACTERS_ACTION";
        try{
            const result = state.autReducer.extractor.findWithCharacters(chars);
            dispatch({
                type: type,
                payload: {
                            range: result,
                            error: ""
        }
            })
        }
        catch(e){
            dispatch({
                type: type,
                payload: {
                            range: [],
                            error: "Invalid Input"
        }
            })
        }
    }
}

