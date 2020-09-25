const initialState = {
    isLogedin: false,
    extractor: {}
}

export function autReducer(state = initialState, action){
    switch(action.type){
        case "LOGG_IN_ACTION":
            return {...state, isLogedin: action.payload.isLogedin, extractor: action.payload.extractor};
        default:
            return state;
    }
}