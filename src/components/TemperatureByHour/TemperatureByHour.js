import React, {Component} from 'react';

import { twelveHourFormat } from './../../services/helpers';
import './TemperatureByHour.css';

class TemperatureByHour extends Component {
    render() {
        const { hour, amPM, weekdayShort, temperature, condition, icon } = this.props;
        return (
            <div className="TemperatureByHour">
                <p className="time"> {twelveHourFormat(hour)}{amPM.toLowerCase()} </p>
                <div className="condition-icon">
                    <img src={`https://icons.wxug.com/i/c/i/${icon}.gif`} alt={condition} />
                </div>
                <p className="temperature"> {temperature}&deg; </p>
            </div>
        )
    }
}

export default TemperatureByHour;
