import React, { Component } from 'react';

import './App.component.css';

import SearchBar from './../containers/search-bar/SearchBar.component.jsx';
import WeatherList from './../containers/weather-list/WeatherList.component.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="app-component">
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
