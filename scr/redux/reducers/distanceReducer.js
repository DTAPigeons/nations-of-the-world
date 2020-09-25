import react from "react"

const initialState = {
    distance: undefined,
    error: ""
}

export function distanceReducer(state=initialState, action){
    switch(action.type){
        case "FIND_DISTANCE_ACTION": 
        return{
            ...state,
            ...action.payload
        }
        default: return state
    }
}