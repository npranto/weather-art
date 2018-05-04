import cloneDeep from 'lodash.clonedeep';
import { 
    GET_CURRENT_LOCATION_WEATHER_CONDITION,
    GET_TODAYS_HIGH_AND_LOW_TEMPERATURES,
    FETCH_HOURLY_FORECASTS_FOR_NEXT_24_HOURS
} from './../actions/types';

const weatherReducer = (state = {condition: {}, forecastToday: {}, hourlyForecasts: []}, action) => {
    switch (action.type) {
        case GET_CURRENT_LOCATION_WEATHER_CONDITION: {
            let copy = cloneDeep(state);
            copy.condition = { ...action.payload };
            return copy;
        }
        case GET_TODAYS_HIGH_AND_LOW_TEMPERATURES: {
            let copy = cloneDeep(state);
            copy.forecastToday = { ...action.payload };
            return copy;
        }
        case FETCH_HOURLY_FORECASTS_FOR_NEXT_24_HOURS: {
            let copy = cloneDeep(state);
            copy.hourlyForecasts = [...action.payload];
            return copy;
        }
    }
    return state;
}

export default weatherReducer;