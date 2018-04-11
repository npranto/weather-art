import React, {Component} from 'react';

import './WeatherStat.css';

class WeatherStat extends Component {
    render() {
        return (
            <div className="WeatherStat">   
                <p className="label left"><sub> Sunrise </sub></p>
                <p className="value left"> 6:08 AM </p>
            </div>
        )
    }
}

export default WeatherStat;