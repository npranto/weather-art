import React, { Component } from 'react';

import './App.component.css';

import SearchBar from './../containers/search-bar/SearchBar.component.jsx';
import WeatherList from './../containers/weather-list/WeatherList.component.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="app-component">
          <h2 style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 200,
              fontFamily: 'Architects Daughter',
              marginTop: '5px',
              marginBottom: '5px'
          }}>
              WeatherArt
          </h2>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
