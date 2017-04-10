import axios from 'axios';
import {fetchWeatherByCity} from './../../config/open-weather-map.config.js';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city)=>{
	const request = axios.get(fetchWeatherByCity(city));
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

