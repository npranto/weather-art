import React, {Component} from 'react';

import './TemperatureByDay.css';

class TemperatureByDay extends Component {
    render() {
        const { weekday, temperatures, condition, icon } = this.props;
        return (
            <div className="TemperatureByDay">
                <div className="day">
                    {weekday}
                </div>
                <div className="condition-icon">
                    <img src={`https://icons.wxug.com/i/c/i/${icon}.gif`} alt={condition} />
                </div>
                <div className="temperature-high-low">
                    <p className="high"> {temperatures.high} </p>
                    <p className="low"> {temperatures.low} </p>
                </div>
            </div>
        )
    }
}

export default TemperatureByDay;
