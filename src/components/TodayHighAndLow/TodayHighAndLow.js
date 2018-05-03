import React, {Component} from 'react';

import './TodayHighAndLow.css';

class TodayHighAndLow extends Component {
    render() {
        const { day, weekday, month, highTemperature, lowTemperature } = this.props;
        return (
            <div className="TodayHighAndLow">
                <div className="today">
                    {weekday}, {month} {day}
                </div>
                <div className="temperature-high-low">
                    <p className="high"> {highTemperature} </p>
                    <p className="low"> {lowTemperature} </p>
                </div>
            </div>
        )
    }
}

export default TodayHighAndLow;
