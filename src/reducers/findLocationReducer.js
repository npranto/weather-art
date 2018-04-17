import {
    FETCH_LOCATIONS_BY_QUERY
} from './../actions/types';
import cloneDeep from 'lodash.clonedeep';

const findLocationReducer = (state = {
    locations: [],
    error: {
        status: false,
        message: ''
    }
}, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS_BY_QUERY: {
            let copy = cloneDeep(state);
            const {success, data, message} = action.payload;
            console.log(action.payload);
            if (success) {
                copy.locations = [...data];
                copy.error.status = true;
                copy.error.message = '';
            }
            if (!success) {
                copy.locations = [];
                copy.error.status = false;
                copy.error.message = message;
            }
            return copy;
        }
    }
    return state;
}

export default findLocationReducer;