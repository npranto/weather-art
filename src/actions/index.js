import {
    FETCH_LOCATIONS_BY_QUERY
} from './types';
import getLocationsByCityQuery from './../services/api/getLocationsByCityQuery';

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