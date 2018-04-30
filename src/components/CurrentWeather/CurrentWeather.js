import React, {Component} from 'react';

import './CurrentWeather.css';

class CurrentWeather extends Component {
    render() {
        const { city, temperature, condition } = this.props;
        return (
            <div className="CurrentWeather">
                <p className="city"> {city} </p>
                <p className="condition"> {condition} </p>
                <p className="temperature"> {temperature}&deg; </p>
            </div>
        )
    }
}

export default CurrentWeather;
