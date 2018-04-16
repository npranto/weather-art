import React, {Component} from 'react';

import LocationList from './../LocationList/LocationList';
import AddWeather from './../AddWeather/AddWeather';
import './WeatherGallery.css';

class WeatherGallery extends Component {
    render() {
        return (
            <div className="WeatherGallery">
                <p className="title"> Forecasts </p>
                <LocationList />
                <div className="add-weather-and-temperature-toggler">
                    <AddWeather />
                </div>
            </div>
        )
    }
}

export default WeatherGallery;