import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReducer';
import {distanceReducer} from "./reducers/distanceReducer";
import {nearestReducer} from './reducers/nearestReducer';
import {timeZoneRangeReducer} from "./reducers/timeZoneRangeReducer";
import {charecterSearchReducer} from "./reducers/characterSearchReducer";

const reducer = combineReducers({
    authReducer,
    distanceReducer,
    nearestReducer,
    timeZoneRangeReducer,
    charecterSearchReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));