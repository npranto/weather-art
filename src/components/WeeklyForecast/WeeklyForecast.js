import React, {Component} from 'react';

import TemperatureByDay from './../TemperatureByDay/TemperatureByDay';
import './WeeklyForecast.css';

class WeeklyForecast extends Component {
    renderTemperatureByDay(weeklyForecasts) {
        return weeklyForecasts.map((forecast, index) => {
            const { weekday, temperatures, condition, icon } = forecast;
            return ((forecast && temperatures)
                ? (
                    <TemperatureByDay
                        key={index}
                        weekday={weekday}
                        temperatures={temperatures}
                        condition={condition}
                        icon={icon} />
                )
                : (<div> Loading... </div>)
            );
        })
    }
    render() {
        const { weeklyForecasts } = this.props;
        return (
            <div className="WeeklyForecast">
                {
                    this.renderTemperatureByDay(weeklyForecasts)
                }
            </div>
        )
    }
}

export default WeeklyForecast;
