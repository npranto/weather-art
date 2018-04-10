import React, {Component} from 'react';

import './HourlyForecast.css';

class HourlyForecast extends Component {
    render() {
        return (
            <div className="HourlyForecast">
                <div className="TemperatureByHour">
                    <p className="time"> Now </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/clear.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 39&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 2pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/cloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 39&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 3pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/chancesnow.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 40&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 4pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/mostlycloudy.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 41&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 2pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/tstorms.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 39&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 3pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/clear.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 40&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 4pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/clear.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 41&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 2pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/flurries.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 39&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 3pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/clear.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 40&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 4pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/clear.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 41&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 2pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/flurries.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 39&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 3pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/clear.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 40&deg; </p>
                </div>
                <div className="TemperatureByHour">
                    <p className="time"> 4pm </p>
                    <div className="condition-icon">
                        <img src="https://icons.wxug.com/i/c/i/flurries.gif" alt="Weather Condition Icon" />
                    </div>
                    <p className="temperature"> 41&deg; </p>
                </div>
            </div>
        )
    }
}

export default HourlyForecast;
