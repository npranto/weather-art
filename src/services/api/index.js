// export all API endpoint functions
import getLocationsByCityQueryEndpoint from './getLocationsByCityQuery';
import getAstronomyEndpoint from './getAstronomy';
import getWeatherConditionEndpoint from './getWeatherCondition';
import getForecastForNext10DaysEndpoint from './getForecastForNext10Days';
import getHourlyForecastForNext24HoursEndpoint from './getHourlyForecastForNext24Hours';
import getCurrentLocationLonAndLatEndpoint from './getCurrentLocationLonAndLat';

export const getLocationsByCityQuery = getLocationsByCityQueryEndpoint;
export const getAstronomy = getAstronomyEndpoint;
export const getWeatherCondition = getWeatherConditionEndpoint;
export const getForecastForNext10Days = getForecastForNext10DaysEndpoint;
export const getHourlyForecastForNext24Hours = getHourlyForecastForNext24HoursEndpoint;
export const getCurrentLocationLonAndLat = getCurrentLocationLonAndLatEndpoint;
