import React, { Component } from 'react';

import {
    getLocationsByCityQuery,
    getAstronomy,
    getWeatherCondition,
    getForecastForNext10Days,
    getHourlyForecastForNext24Hours,
    getCurrentLocationLonAndLat,
    getCityAndCountryFromLonAndLat} from './services/api';
import './App.css';

class App extends Component {

    componentWillMount() {
        // getLocationsByCityQuery('paris')
        //     .then(res => console.log(res))

        // getAstronomy('bolbo')
        //     .then(res => console.log(res))

        // getWeatherCondition('fdgdfgf')
        //     .then(res => console.log(res));

        // getForecastForNext10Days('cambridge', 'US', 'MA')
        //     .then(res => console.log(res))

        // getHourlyForecastForNext24Hours('fgdfgfdgf')
        //     .then(res => console.log(res))

        // getCurrentLocationLonAndLat((res) => {
        //     if (!res.success) {
        //         console.log(res.message);
        //     }
        //     if (res.success) {
        //         getCityAndCountryFromLonAndLat(res.data).then(res => console.log(res))
        //     }
        // });

        // latitude: 42.3931559, longitude:-71.13852349999999
        // getCityAndCountryFromLonAndLat({
        //     latitude: 42.353904,
        //     longitude: -4345.133711
        // }).then(res => console.log(res))
    }

    render() {
        return (
            <div className="App">

              <h1 className="App-title">Welcome to React</h1>

            </div>
        );
    }
}

export default App;
