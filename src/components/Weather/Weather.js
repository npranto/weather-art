import React, {Component} from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import TodayHighAndLow from '../TodayHighAndLow/TodayHighAndLow';
import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <div className="Weather">
                <CurrentWeather />
                <TodayHighAndLow />
            </div>
        )
    }
}

export default Weather;
