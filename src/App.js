import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Weather from './components/Weather/Weather';
import WeatherGallery from './components/WeatherGallery/WeatherGallery';
import FindLocation from './components/FindLocation/FindLocation';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="routes">
                        <Route exact path="/" component={Weather} />
                        <Route path="/gallery" component={WeatherGallery} />
                        <Route path="/search" component={FindLocation} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default (App);




























// import {
//     getLocationsByCityQuery,
//     getAstronomy,
//     getWeatherCondition,
//     getForecastForNext10Days,
//     getHourlyForecastForNext24Hours,
//     getCurrentLocationLonAndLat,
//     getCityAndCountryFromLonAndLat} from './services/api';

// getLocationsByCityQuery('fgdfgf')
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
