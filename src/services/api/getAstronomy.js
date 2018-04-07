import {formatEndpointResponse} from '../helpers';

const getAstronomy = (city, country, state) => {
	return fetch(`http://api.wunderground.com/api/${process.env.REACT_APP_WU_DEV_API_KEY}/astronomy/q/${country || ''}/${state || ''}/${city || ''}.json`)
        .then(response => response.json())
        .then((json) => {
			if (noCitiesMatchSearchQuery(json)) {
				return formatEndpointResponse(false, null, json.response.error.description);
			};
			if (multipleCitiesMatchSearchQuery(json)) {
				return formatEndpointResponse(false, json.response.results, 'Multiple cities match query!');
			};
            if (json) {
            	return formatEndpointResponse(true, json);
            };
        })
        .catch(error => formatEndpointResponse(false, null, 'Oops! Something went terribly wrong!'));
}

const noCitiesMatchSearchQuery = json => json && (json.response) && (json.response.error) && (json.response.error);

const multipleCitiesMatchSearchQuery = json => json && (json.response) && (json.response.results);

export default getAstronomy;
