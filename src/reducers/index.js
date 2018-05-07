import {combineReducers} from 'redux';  

import findLocationReducer from './findLocationReducer';
import weatherReducer from './weatherReducer';
import weatherGalleryReducer from './weatherGalleryReducer';
import currentActiveLocationReducer from './currentActiveLocationReducer';

const reducers = combineReducers({
    findLocation: findLocationReducer,
    weather: weatherReducer,
    weatherGallery: weatherGalleryReducer,
    currentActiveLocation: currentActiveLocationReducer
})

export default reducers;