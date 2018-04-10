import React, {Component} from 'react';

import './WeeklyForecast.css';

class WeeklyForecast extends Component {
    render() {
        return (
            <div className="WeeklyForecast">
                <div className="TemperatureByDay">
                    <div className="day">
                        Wednesday
                    </div>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/partlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <div className="temperature-high-low">
                        <p className="high"> 105 </p>
                        <p className="low"> 104 </p>
                    </div>
                </div>
                <div className="TemperatureByDay">
                    <div className="day">
                        Thursday
                    </div>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/partlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <div className="temperature-high-low">
                        <p className="high"> 105 </p>
                        <p className="low"> 104 </p>
                    </div>
                </div>
                <div className="TemperatureByDay">
                    <div className="day">
                        Friday
                    </div>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/partlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <div className="temperature-high-low">
                        <p className="high"> 105 </p>
                        <p className="low"> 104 </p>
                    </div>
                </div>
                <div className="TemperatureByDay">
                    <div className="day">
                        Saturday
                    </div>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/partlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <div className="temperature-high-low">
                        <p className="high"> 105 </p>
                        <p className="low"> 104 </p>
                    </div>
                </div>
                <div className="TemperatureByDay">
                    <div className="day">
                        Sunday
                    </div>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/partlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <div className="temperature-high-low">
                        <p className="high"> 105 </p>
                        <p className="low"> 104 </p>
                    </div>
                </div>
                <div className="TemperatureByDay">
                    <div className="day">
                        Monday
                    </div>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/partlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <div className="temperature-high-low">
                        <p className="high"> 105 </p>
                        <p className="low"> 104 </p>
                    </div>
                </div>
                <div className="TemperatureByDay">
                    <div className="day">
                        Tuesday
                    </div>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/partlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <div className="temperature-high-low">
                        <p className="high"> 105 </p>
                        <p className="low"> 104 </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeeklyForecast;
