import React, {Component} from 'react';

import './TemperatureByDay.css';

class TemperatureByDay extends Component {
    render() {
        return (
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
        )
    }
}

export default TemperatureByDay;
