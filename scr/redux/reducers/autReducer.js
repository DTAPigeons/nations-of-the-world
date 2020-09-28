const initialState = {
    isLogedin: false,
    error: "",
    extractor: {}
}

export function autReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGG_IN_ACTION":
            return {...state, ...action.payload};
        case "LOGG_OUT_ACTION":
            return {...state, ...initialState}
        default:
            return state;
    }
}