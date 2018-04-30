import {formatEndpointResponse} from './../helpers';

const getCurrentLocationLonAndLat = (cb) => {
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         if (position && position.coords) {
    //             return cb(formatEndpointResponse(true, {
    //                 longitude: position.coords.longitude,
    //                 latitude: position.coords.latitude
    //             }));
    //         }
    //     }, (error) => {
    //         return cb(formatEndpointResponse(false, null, error.message));
    //     });
    // }
    // else {
    //     return cb(formatEndpointResponse(false, null, 'Geolocation is not supported!'))
    // }

    // NOTE: TEMPORARY LONGITUDE AND LATITUDE
    return cb({
        data: {
            longitude: -71.1384606, 
            latitude: 42.393068799999995
        },
        message: null,
        success: true
    });
}

export default getCurrentLocationLonAndLat;
