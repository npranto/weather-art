import React, {Component} from 'react';

import './TemperatureByHour.css';

class TemperatureByHour extends Component {
    render() {
        return (
            <div className="TemperatureByHour">
                <p className="time"> 4pm </p>
                <div className="condition-icon">
                    <img src="https://icons.wxug.com/i/c/i/flurries.gif" alt="Weather Condition Icon" />
                </div>
                <p className="temperature"> 41&deg; </p>
            </div>
        )
    }
}

export default TemperatureByHour;
