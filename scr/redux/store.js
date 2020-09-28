import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {autReducer} from './reducers/autReducer';
import {distanceReducer} from "./reducers/distanceReducer";
import {nearestReducer} from './reducers/nearestReducer';
import {timeZoneRangeReducer} from "./reducers/timeZoneRangeReducer";
import {charecterSearchReducer} from "./reducers/characterSearchReducer";

const reducer = combineReducers({
    autReducer,
    distanceReducer,
    nearestReducer,
    timeZoneRangeReducer,
    charecterSearchReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));