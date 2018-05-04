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
                    <p className="high"> <sup> {highTemperature}&deg; </sup> </p>
                    <p className="slash"> / </p>
                    <p className="low"> <sub> {lowTemperature}&deg; </sub> </p>
                </div>
            </div>
        )
    }
}

export default TodayHighAndLow;
