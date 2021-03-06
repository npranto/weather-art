import {formatEndpointResponse} from '../helpers';

const getWeatherCondition = (coordinates) => {
    return fetch(`http://api.wunderground.com/api/${process.env.REACT_APP_WU_DEV_API_KEY}/conditions/q/${coordinates.latitude},${coordinates.longitude}.json`)
        .then(response => response.json())
        .then(json => {
            if (noCitiesMatchSearchQuery(json)) {
                return formatEndpointResponse(false, null, json.response.error.description);
            }
            if (json) {
                return formatEndpointResponse(true, json);
            }
        })
        .catch(error => formatEndpointResponse(false, null, 'Oops! Something went terribly wrong!'))
}

const noCitiesMatchSearchQuery = json => json && (json.response) && (json.response.error) && (json.response.error);

export default getWeatherCondition;
