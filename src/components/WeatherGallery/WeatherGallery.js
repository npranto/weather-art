import React, {Component} from 'react';

import LocationList from './../LocationList/LocationList';
import './WeatherGallery.css';

class WeatherGallery extends Component {
    render() {
        return (
            <div className="WeatherGallery">
                <p className="title"> Forecasts </p>
                <LocationList />
            </div>
        )
    }
}

export default WeatherGallery;