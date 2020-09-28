const initialState = {
    nearest: undefined,
    error: ""
}

export function nearestReducer(state = initialState, action) {
    switch (action.type) {
        case "FIND_NEAREST_ACTION":
            return {
                ...state,
                ...action.payload
            }
        case "RESET_NEAREST_ACTION": {
            return {
                ...state,
                ...initialState
            }
        }
        default:
            return state
    }
}