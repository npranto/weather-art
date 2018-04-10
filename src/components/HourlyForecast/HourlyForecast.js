import React, {Component} from 'react';

import TemperatureByHour from './../TemperatureByHour/TemperatureByHour';
import './HourlyForecast.css';

class HourlyForecast extends Component {
    render() {
        return (
            <div className="HourlyForecast">
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
                <TemperatureByHour />
            </div>
        )
    }
}

export default HourlyForecast;
