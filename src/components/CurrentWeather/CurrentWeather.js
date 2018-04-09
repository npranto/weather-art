import React, {Component} from 'react';

import './CurrentWeather.css';

class CurrentWeather extends Component {
    render() {
        return (
            <div className="CurrentWeather">
                <p className="city"> San Francisco Bay Area </p>
                <p className="condition"> Partly Cloudy </p>
                <p className="temperature"> 54&deg; </p>
            </div>
        )
    }
}

export default CurrentWeather;
