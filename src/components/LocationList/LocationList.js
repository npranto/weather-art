import React, {Component} from 'react';

import './LocationList.css';
import LocationListItem from '../LocationListItem/LocationListItem';

class LocationList extends Component {
    render() {
        return (
            <div className="LocationList">
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
                <LocationListItem />
            </div>
        )
    }
}

export default LocationList;