import React, { Component } from 'react';

import {getLocationsByCityQuery, getAstronomy, getWeatherCondition} from './services/api';
import './App.css';

class App extends Component {

    componentWillMount() {
        // getLocationsByCityQuery('paris')
        //     .then(res => console.log(res))

        // getAstronomy('tulsa')
        //     .then(res => console.log(res))

        // getWeatherCondition('kushtia')
        //     .then(res => console.log(res));
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
