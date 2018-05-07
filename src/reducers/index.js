import {combineReducers} from 'redux';  

import findLocationReducer from './findLocationReducer';
import weatherReducer from './weatherReducer';
import weatherGalleryReducer from './weatherGalleryReducer';

const reducers = combineReducers({
    findLocation: findLocationReducer,
    weather: weatherReducer,
    weatherGallery: weatherGalleryReducer
})

export default reducers;