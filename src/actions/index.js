import {
    FETCH_LOCATIONS_BY_QUERY,
    GET_CURRENT_LOCATION_WEATHER_CONDITION,
    GET_TODAYS_HIGH_AND_LOW_TEMPERATURES,
    FETCH_HOURLY_FORECASTS_FOR_NEXT_24_HOURS,
    FETCH_FORECAST_FOR_NEXT_10_DAYS,
    FETCH_ASTRONOMY
} from './types';
import {
    getLocationsByCityQuery,
    getCurrentLocationLonAndLat,
    getWeatherCondition,
    getTodaysForecast,
    getHourlyForecastForNext24Hours,
    getCityAndCountryFromLonAndLat,
    getForecastForNext10Days,
    getAstronomy
} from './../services/api';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

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
                                weather: condition.data.current_observation.weather,
                                relativeHumidity: condition.data.current_observation.relative_humidity,
                                wind: {
                                    direction: condition.data.current_observation.wind_dir,
                                    speed: condition.data.current_observation.wind_mph
                                },
                                pressure: condition.data.current_observation.pressure_in,
                                feelsLike: condition.data.current_observation.feelslike_f,
                                precipitation: condition.data.current_observation.precip_today_in,
                                visibility: condition.data.current_observation.visibility_mi,
                                uv: condition.data.current_observation.UV
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
                                    quickSummary: night.fcttext,
                                    title: night.title,
                                    chanceOfRain: night.pop
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

export const fetchHourlyForecastForNext24Hours = () => {
    return (dispatch, getState) => {
        getCurrentLocationLonAndLat(res => {
            if (res.success) {
                const coordinates = res.data;
                getHourlyForecastForNext24Hours(coordinates)
                    .then(hourlyForecasts => {
                        if (hourlyForecasts.success) {
                            const hourlyForecastsInfo = hourlyForecasts.data.hourly_forecast.map(hourlyForecast => {
                                return {
                                    dayAndTime: {
                                        hour: hourlyForecast.FCTTIME.hour,
                                        amPM: hourlyForecast.FCTTIME.ampm,
                                        weekdayShort: hourlyForecast.FCTTIME.weekday_name_abbrev
                                    },
                                    temperature: hourlyForecast.temp.english,
                                    condition: hourlyForecast.condition,
                                    icon: hourlyForecast.icon
                                }
                            });
                            dispatch({
                                type: FETCH_HOURLY_FORECASTS_FOR_NEXT_24_HOURS,
                                payload: hourlyForecastsInfo
                            })
                        }
                    })
            }
        })
    }
}

export const fetchForecastForNext10Days = () => {
    return (dispatch, getState) => {
        getCurrentLocationLonAndLat(res => {
            if (res.success) {
                const coordinates = res.data;
                getForecastForNext10Days(coordinates)
                    .then(forecast10days => {
                        if (forecast10days.success) {
                            const forecast10DaysInfo = forecast10days.data.forecast.simpleforecast.forecastday.map(forecast => {
                                return {
                                    weekday: forecast.date.weekday,
                                    temperatures: {
                                        high: forecast.high.fahrenheit,
                                        low: forecast.low.fahrenheit
                                    },
                                    condition: forecast.conditions,
                                    icon: forecast.icon
                                }
                            });
                            dispatch({
                                type: FETCH_FORECAST_FOR_NEXT_10_DAYS,
                                payload: forecast10DaysInfo
                            })
                        }
                    })
            }
        })
    }
}

export const fetchAstronomy = () => {
    return (dispatch, getState) => {
        getCurrentLocationLonAndLat(res => {
            if (res.success) {
                const coordinates = res.data;
                getAstronomy(coordinates)
                    .then(astronomy => {
                        if (astronomy.success) {
                            dispatch({
                                type: FETCH_ASTRONOMY,
                                payload: astronomy.data.sun_phase
                            })
                        }
                    })
            }
        })
    }
}