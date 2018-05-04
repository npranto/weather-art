import React, {Component} from 'react';

import TemperatureByHour from './../TemperatureByHour/TemperatureByHour';
import './HourlyForecast.css';

class HourlyForecast extends Component {
    renderTemperatureByHour(hourlyForecasts) {
        return hourlyForecasts.map((forecast, index) => {
            return (forecast && forecast.dayAndTime)
                ? (
                    <TemperatureByHour 
                        key={index}
                        hour={forecast.dayAndTime.hour}
                        amPM={forecast.dayAndTime.amPM}
                        weekdayShort={forecast.dayAndTime.weekdayShort}
                        temperature={forecast.temperature}
                        condition={forecast.condition}
                        icon={forecast.icon} />
                )
                : <div> Loading... </div>
        })
    }
    render() {
        const { hourlyForecasts } = this.props;
        return (
            <div className="HourlyForecast">
                {
                    this.renderTemperatureByHour(hourlyForecasts)
                }
            </div>
        )
    }
}

export default HourlyForecast;
