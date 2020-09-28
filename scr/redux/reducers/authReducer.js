const initialState = {
    isLogedin: false,
    error: "",
    extractor: {}
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case "LOG_IN_ACTION":
            return {...state, ...action.payload};
        case "LOG_OUT_ACTION":
            return {...state, ...initialState}
        default:
            return state;
    }
}