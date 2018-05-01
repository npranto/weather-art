import cloneDeep from 'lodash.clonedeep';
import { 
    GET_CURRENT_LOCATION_WEATHER_CONDITION,
    GET_TODAYS_HIGH_AND_LOW_TEMPERATURES
} from './../actions/types';

const weatherReducer = (state = {condition: {}, forecastToday: {}}, action) => {
    switch (action.type) {
        case GET_CURRENT_LOCATION_WEATHER_CONDITION: {
            let copy = cloneDeep(state);
            copy.condition = { ...action.payload };
            return copy;
        }
        case GET_TODAYS_HIGH_AND_LOW_TEMPERATURES: {
            let copy = cloneDeep(state);
            copy.forecastToday = { ...action.payload };
            console.log('COPY', copy);
            return copy;
        }
    }
    return state;
}

export default weatherReducer;