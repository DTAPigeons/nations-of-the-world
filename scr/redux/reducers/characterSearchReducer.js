const initialState = {
    range: [],
    error: ""
}

export function charecterSearchReducer(state=initialState, action){
    switch(action.type){
        case "FIND_WITH_CHARACTERS_ACTION": 
        return{
            ...state,
            ...action.payload
        }
        case "RESET_WITH_CHARACTERS_ACTION":
            return{
                ...state,
                ...initialState
            }
        default: return state
    }
}