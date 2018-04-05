import {formatEndpointResponse} from './../helpers';

const getCurrentLocationLonAndLat = (cb) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position && position.coords) {
                return cb(formatEndpointResponse(true, {
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                }));
            }
        }, (error) => {
            return cb(formatEndpointResponse(false, null, error.message));
        });
    }
    else {
        return cb(formatEndpointResponse(false, null, 'Geolocation is not supported!'))
    }
}

export default getCurrentLocationLonAndLat;
