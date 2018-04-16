import React, {Component} from 'react';

import LocationList from './../LocationList/LocationList';
import AddWeather from './../AddWeather/AddWeather';
import ToggleCelsiusAndFahrenheit from '../ToggleCelsiusAndFahrenheit/ToggleCelsiusAndFahrenheit';
import './WeatherGallery.css';

class WeatherGallery extends Component {
    render() {
        return (
            <div className="WeatherGallery">
                <p className="title"> Forecasts </p>
                <LocationList />
                <div className="add-weather-and-temperature-toggler">
                    <ToggleCelsiusAndFahrenheit />
                    <AddWeather />
                </div>
            </div>
        )
    }
}

export default WeatherGallery;