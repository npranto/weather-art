import fetchJsonp from 'fetch-jsonp';
import {formatEndpointResponse} from '../helpers';

const getLocationsByCityQuery = (query) => {
    return fetchJsonp(`http://autocomplete.wunderground.com/aq?query=${query}`, {jsonpCallback: 'cb'})
        .then(res => res.json())
        .then(json => {
            if (json && json.RESULTS && json.RESULTS.length === 0) {
                return formatEndpointResponse(false, null, 'No cities found!')
            }
            if (json && json.RESULTS && json.RESULTS.length > 0) {
                return formatEndpointResponse(true, json.RESULTS);
            }
        })
        .catch(error => formatEndpointResponse(false, null, 'Oops! Something went terribly wrong!'))
};

export default getLocationsByCityQuery;
