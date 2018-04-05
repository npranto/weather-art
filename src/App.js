import React, { Component } from 'react';

import {
    getLocationsByCityQuery,
    getAstronomy,
    getWeatherCondition,
    getForecastForNext10Days,
    getHourlyForecastForNext24Hours,
    getCurrentLocationLonAndLat} from './services/api';
import './App.css';

class App extends Component {

    componentWillMount() {
        // getLocationsByCityQuery('paris')
        //     .then(res => console.log(res))

        // getAstronomy('tulsa')
        //     .then(res => console.log(res))

        // getWeatherCondition('kushtia')
        //     .then(res => console.log(res));

        // getForecastForNext10Days('fbjhsdbfhjsfjbdfh', 'USA', 'CA')
        //     .then(res => console.log(res))

        // getHourlyForecastForNext24Hours('pabna')
        //     .then(res => console.log(res))

        // getCurrentLocationLonAndLat((res) => {
        //     console.log(res)
        // });
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
