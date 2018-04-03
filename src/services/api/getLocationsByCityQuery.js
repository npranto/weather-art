import axios from 'axios';
import {formatEndpointResponse, request} from '../helpers';

const getLocationsByCityQuery = async (query) => {
    const locationsStatus = await request(`http://autocomplete.wunderground.com/aq?query=${query}`);
    return locationsStatus && locationsStatus.RESULTS
        ? formatEndpointResponse(true, locationsStatus.RESULTS)
        : formatEndpointResponse(false, null, 'Oops, no cities found!')
};

export default getLocationsByCityQuery;
