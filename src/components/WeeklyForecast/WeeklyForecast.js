import React, {Component} from 'react';

import TemperatureByDay from './../TemperatureByDay/TemperatureByDay';
import './WeeklyForecast.css';

class WeeklyForecast extends Component {
    render() {
        return (
            <div className="WeeklyForecast">
                <TemperatureByDay />
                <TemperatureByDay />
                <TemperatureByDay />
                <TemperatureByDay />
                <TemperatureByDay />
                <TemperatureByDay />
                <TemperatureByDay />
            </div>
        )
    }
}

export default WeeklyForecast;
