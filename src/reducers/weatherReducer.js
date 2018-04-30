import cloneDeep from 'lodash.clonedeep';
import { GET_CURRENT_LOCATION_WEATHER_CONDITION } from './../actions/types';

const weatherReducer = (state = {condition: {}}, action) => {
    switch (action.type) {
        case GET_CURRENT_LOCATION_WEATHER_CONDITION: {
            let copy = cloneDeep(state);
            copy.condition = {...action.payload};
            return copy;
        }
    }
    return state;
}

export default weatherReducer;