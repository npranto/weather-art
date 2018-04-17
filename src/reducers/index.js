import {combineReducers} from 'redux';  

import findLocationReducer from './findLocationReducer';

const reducers = combineReducers({
    findLocation: findLocationReducer 
})

export default reducers;