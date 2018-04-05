// export all API endpoint functions
import getLocationsByCityQueryEndpoint from './getLocationsByCityQuery';
import getAstronomyEndpoint from './getAstronomy';
import getWeatherConditionEndpoint from './getWeatherCondition';
import getForecastForNext10DaysEndpoint from './getForecastForNext10Days';

export const getLocationsByCityQuery = getLocationsByCityQueryEndpoint;
export const getAstronomy = getAstronomyEndpoint;
export const getWeatherCondition = getWeatherConditionEndpoint;
export const getForecastForNext10Days = getForecastForNext10DaysEndpoint;
