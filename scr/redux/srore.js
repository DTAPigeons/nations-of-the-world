import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {autReducer} from './reducers/autReducer';

const reducer = combineReducers({autReducer});

export const store = createStore(reducer, applyMiddleware(thunk));