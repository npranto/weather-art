import React, {Component} from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <div className="Weather">
                <CurrentWeather />
            </div>
        )
    }
}

export default Weather;
