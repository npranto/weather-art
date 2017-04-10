import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import './WeatherList.component.css';
import Chart from './../../components/chart/Chart.component.jsx';
import CityGoogleMap from './../../components/city-google-map/CityGoogleMap.component.jsx';

class WeatherList extends Component {
	
	constructor(props) {
		super(props);

		this.renderWeather = this.renderWeather.bind(this);
	}

	renderWeather(cityWeather) {
		const name = cityWeather.city.name;
		const latitude = cityWeather.city.coord.lat;
		const longitude = cityWeather.city.coord.lon;
		const temperatureList = this.kelvinToFahrenheit(this.getFiveDayTemperatures(cityWeather.list));
		const pressureList = this.getFiveDayPressures(cityWeather.list);
		const humidityList = this.getFiveDayHumidities(cityWeather.list)

		return (
			<tr key={name} className="z-depth-4">
	          <td> 
	        	<CityGoogleMap className="city-map" lat={latitude} lon={longitude} />
	        	<h5> {name} </h5>
	          </td>
	          <td>
				<Chart data={temperatureList} units="temperature" stroke="green" fill="green" />
	          </td>
	          <td>
	          	<Chart data={pressureList} units="pressure" stroke="gray" fill="gray" />
	          </td>
	          <td>
	          	<Chart data={humidityList} units="humidity" stroke="red" fill="red" />
	          </td>
	        </tr>
		)
	}

	kelvinToFahrenheit(list) {
		return _.map(list, (listItem)=>{
			return _.round(((9/5)*((listItem) - 273) + 32), 2)
		})
	}

	getFiveDayTemperatures(list) {
		return _.map(list, 'main.temp')
	}

	getFiveDayPressures(list) {
		return _.map(list, 'main.pressure')
	}

	getFiveDayHumidities(list) {
		return _.map(list, 'main.humidity')
	}

	render() {
		return (
			<section>
			  {/* citation: https://codepen.io/nikhil8krishnan/pen/WvYPvv	*/}
			  <div className="tbl-header">
			    <table cellPadding="0" cellSpacing="0" border="0">
			      <thead>
			        <tr>
			          <th>City</th>
			          <th>Temperature <sup>(<span>&#8457;</span>)</sup></th>
			          <th>Pressure <sup>(hPa)</sup></th>
			          <th>Humidity <sup>(<span>&#37;</span>)</sup></th>
			        </tr>
			      </thead>
			    </table>
			  </div>
			  <div className="tbl-content">
			    <table cellPadding="0" cellSpacing="0" border="0">
			      <tbody>
			      	{this.props.weather.map(this.renderWeather)}
			      </tbody>
			    </table>
			  </div>
			</section>

		)
	}

}

const mapStateToProps = (state) => {
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(WeatherList);


