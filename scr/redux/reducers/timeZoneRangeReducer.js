const initialState = {
    range: [],
    error: ""
}

export function timeZoneRangeReducer(state=initialState, action){
    switch(action.type){
        case "FIND_TIME_ZONE_RANGE_ACTION": 
        return{
            ...state,
            ...action.payload
        }
        case "RESET_TIME_ZONE_RANGE_ACTION":{
            return{
                ...state,
                ...initialState
            }
        }
        default: return state
    }
}