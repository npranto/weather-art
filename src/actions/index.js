import {
    FETCH_LOCATIONS_BY_QUERY
} from './types';
import getLocationsByCityQuery from './../services/api/getLocationsByCityQuery';
import getCurrentLocationLonAndLat from './../services/api/getCurrentLocationLonAndLat';
import getWeatherCondition from './../services/api/getWeatherCondition';

export const fetchLocationsByQuery = (query) => {
    return (dispatch, getState) => {
        return getLocationsByCityQuery(query)
            .then(res => {
                console.log(res);
                dispatch({
                    type: FETCH_LOCATIONS_BY_QUERY,
                    payload: res
                })
            })
    }
}

export const getCurrentLocationWeatherCondition = () => {
    return (dispatch, getState) => {
        getCurrentLocationLonAndLat((res => {
            if (res.success) {
                const coordinates = res.data;
                return getWeatherCondition(coordinates)
                    .then(condition => {
                        if (condition.success) {
                            let currentConditionInfo = {
                                city: condition.data.current_observation.display_location.city,
                                temp_f: condition.data.current_observation.temp_f,
                                weather: condition.data.current_observation.weather
                            }
                            dispatch({
                                type: 'GET_CURRENT_LOCATION_WEATHER_CONDITION',
                                payload: currentConditionInfo
                            })
                        }
                    })
            }
        }))
    }
}