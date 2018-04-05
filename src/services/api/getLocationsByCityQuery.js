import fetchJsonp from 'fetch-jsonp';
import {formatEndpointResponse} from '../helpers';

const getLocationsByCityQuery = (query) => {
    return fetchJsonp(`http://autocomplete.wunderground.com/aq?query=${query}`, {jsonpCallback: 'cb'})
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (json.RESULTS) {
                return formatEndpointResponse(true, json.RESULTS);
            }
        })
        .catch((error) => {
            console.error('Ajax request error\n', error);
        })
};


export default getLocationsByCityQuery;
