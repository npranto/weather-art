import {formatEndpointResponse} from './../helpers';

const getForecastForNext10Days = (city, country, state) => {
    return fetch(`http://api.wunderground.com/api/${process.env.REACT_APP_WU_DEV_API_KEY}/forecast10day/q/${country || ''}/${state || ''}/${city || ''}.json`)
        .then(response => response.json())
        .then(json => {
            if (json && json.response && json.response.error) {
                return formatEndpointResponse(false, null, json.response.error.description);
            }
            if (json) {
                return formatEndpointResponse(true, json);
            }
        })
}

export default getForecastForNext10Days;
