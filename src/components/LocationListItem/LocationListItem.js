import React, {Component} from 'react';

import './LocationListItem.css';

class LocationListItem extends Component {
    render() {
        return (
            <div className="LocationListItem">
                <div className="location">
                    <sub className="time"> 10:30 PM </sub>
                    <p className="city"> San Francisco </p>
                </div>
                <div className="temperature">
                    <p> 102&deg; </p>
                </div>
            </div>
        )
    }
}

export default LocationListItem;