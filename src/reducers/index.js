import {combineReducers} from 'redux';  

import findLocationReducer from './findLocationReducer';
import weatherReducer from './weatherReducer';

const reducers = combineReducers({
    findLocation: findLocationReducer,
    weather: weatherReducer
})

export default reducers;