import {formatEndpointResponse, extractCityStateAndCountry} from '../helpers';

const getCityAndCountryFromLonAndLat = (coordinates) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_GEOCODING_API_KEY}`)
        .then(res => res.json())
        .then(json => {
            if (json && json.error_message) {
                return formatEndpointResponse(false, null, json.error_message);
            }
            if (json && json.results && (json.results.length > 0)) {
                const firstMatchedAddressComponent = json.results[0].address_components;
                const extractedCityStateAndCountry = extractCityStateAndCountry(firstMatchedAddressComponent);
                return formatEndpointResponse(true, extractedCityStateAndCountry);
            }
        })
}

export default getCityAndCountryFromLonAndLat;
