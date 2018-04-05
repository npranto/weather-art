import {formatEndpointResponse} from '../helpers';

const getAstronomy = (city, country, state) => {
	return fetch(`http://api.wunderground.com/api/${process.env.REACT_APP_WU_DEV_API_KEY}/astronomy/q/${country || ''}/${state || ''}/${city || ''}.json`)
        .then(response => response.json())
        .then((json) => {
            if (json && json.response && json.response.error && json.response.error) {
                return formatEndpointResponse(false, null, json.response.error.description);
            }
            if (json) {
            	return formatEndpointResponse(true, json);
            }
        })
        .catch(error => console.error('Ajax request error\n', error))
}

export default getAstronomy;
