import {
    FETCH_LOCATIONS_BY_QUERY,
    GET_CURRENT_LOCATION_WEATHER_CONDITION,
    GET_TODAYS_HIGH_AND_LOW_TEMPERATURES
} from './types';
import {
    getLocationsByCityQuery,
    getCurrentLocationLonAndLat,
    getWeatherCondition,
    getTodaysForecast
} from './../services/api';

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
                                type: GET_CURRENT_LOCATION_WEATHER_CONDITION,
                                payload: currentConditionInfo
                            });
                        }
                    });
            }
        }));
    }
}

export const getTodaysHighAndLowTemperatures = () => {
    return (dispatch, getState) => {
        getCurrentLocationLonAndLat((res => {
            if (res.success) {
                const coordinates = res.data;
                return getTodaysForecast(coordinates)
                    .then(forecast => {
                        if (forecast.success) {
                            const [day, night] = forecast.data.forecast.txt_forecast.forecastday.filter(period => {
                                return (period.period === 0) || (period.period === 1);
                            });
                            const [todaysHighAndLow] = forecast.data.forecast.simpleforecast.forecastday.filter(period => {
                                return (period.period === 1);
                            })
                            const forecastInfo = {
                                day: {
                                    quickSummary: day.fcttext,
                                    title: day.title,
                                    chanceOfRain: day.pop
                                },
                                night: {
                                    quickSummary: day.fcttext,
                                    title: day.title,
                                    chanceOfRain: day.pop
                                },
                                todaysHighAndLow: {
                                    day: todaysHighAndLow.date.day,
                                    month: todaysHighAndLow.date.monthname_short,
                                    weekday: todaysHighAndLow.date.weekday,
                                    highF: todaysHighAndLow.high.fahrenheit,
                                    lowF: todaysHighAndLow.low.fahrenheit,
                                }
                            };
                            console.log(forecastInfo);
                            dispatch({
                                type: GET_TODAYS_HIGH_AND_LOW_TEMPERATURES,
                                payload: forecastInfo
                            });
                        }
                    });
            }
        }))
    }
}