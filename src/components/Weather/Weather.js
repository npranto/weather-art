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
        this.props.getTodaysHighAndLowTemperatures();
        this.props.fetchHourlyForecastForNext24Hours();
    }
    render() {
        const { condition, forecastToday, hourlyForecasts } = this.props.weather;
        return (
            <div className="Weather">
                { condition 
                    ? (
                        <CurrentWeather 
                            city={condition.city} 
                            temperature={condition.temp_f} 
                            condition={condition.weather} />
                    )
                    : (<div> Loading... </div>)
                }
                { forecastToday && forecastToday.todaysHighAndLow 
                    ? (
                        <TodayHighAndLow 
                            day={forecastToday.todaysHighAndLow.day}
                            month={forecastToday.todaysHighAndLow.month}
                            weekday={forecastToday.todaysHighAndLow.weekday}
                            highTemperature={forecastToday.todaysHighAndLow.highF}
                            lowTemperature={forecastToday.todaysHighAndLow.lowF} />
                    )
                    : (<div> Loading... </div>)
                }
                { (hourlyForecasts && hourlyForecasts.length > 0)
                    ? (
                        <HourlyForecast 
                            hourlyForecasts={hourlyForecasts} />
                    )
                    : (<div> Loading... </div>)
                }
                
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
