const extractCityStateAndCountry = (addressComponent) => {
    const location = addressComponent
        .reduce((extractedLocation, component) => {

            if (component.types.includes('sublocality')) {
                extractedLocation['sublocality'] = component.long_name;
            }
            if (component.types.includes('locality')) {
                extractedLocation['locality'] = component.long_name;
            }

            if (component.types.includes('country')) {
                extractedLocation['country'] = component.short_name;
            }

            if (component.types.includes('administrative_area_level_1')) {
                extractedLocation['state'] = component.short_name;
            }

            return extractedLocation;

        }, {})
    location['city'] = location.sublocality || location.locality;
    return location;
}

export default extractCityStateAndCountry;
