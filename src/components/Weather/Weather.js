import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './../../actions';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import TodayHighAndLow from '../TodayHighAndLow/TodayHighAndLow';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TodayForecastSummary from '../TodayForecastSummary/TodayForecastSummary';
import TodayWeatherStats from '../TodayWeatherStats/TodayWeatherStats';
import Navigation from '../Navigation/Navigation';
import getCurrentLocationLonAndLat from './../../services/api/getCurrentLocationLonAndLat';
import './Weather.css';

class Weather extends Component {
    componentWillMount() {
        this.props.getCurrentLocationWeatherCondition();
    }
    render() {
        const { condition } = this.props.weather;
        return (
            <div className="Weather">
                <CurrentWeather 
                    city={condition.city} 
                    temperature={condition.temp_f} 
                    condition={condition.weather} />
                <TodayHighAndLow />
                <HourlyForecast />
                <WeeklyForecast />
                <TodayForecastSummary />
                <TodayWeatherStats />
                <Navigation />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, actionCreators)(Weather);
