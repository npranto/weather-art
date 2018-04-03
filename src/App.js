import React, { Component } from 'react';

import {getLocationsByCityQuery} from './services/api';
import './App.css';

class App extends Component {

    componentWillMount() {
        console.log( getLocationsByCityQuery('cambridge') );
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
