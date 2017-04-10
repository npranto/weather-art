import { combineReducers } from 'redux';
import {WeatherReducer} from './Weather.reducer.js';

const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;
