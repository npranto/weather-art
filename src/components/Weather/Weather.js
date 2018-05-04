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
import { isDayTime } from './../../services/helpers';
import './Weather.css';

class Weather extends Component {
    componentWillMount() {
        this.props.getCurrentLocationWeatherCondition();
        this.props.getTodaysHighAndLowTemperatures();
        this.props.fetchHourlyForecastForNext24Hours();
        this.props.fetchForecastForNext10Days();
        this.props.fetchAstronomy();
    }
    render() {
        const { 
            condition, 
            forecastToday, 
            hourlyForecasts, 
            forecastForNext10Days,
            astronomy 
        } = this.props.weather;
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
                {
                    forecastForNext10Days && forecastForNext10Days.length > 0
                        ? (
                            <WeeklyForecast 
                                weeklyForecasts={forecastForNext10Days} />
                        )
                        : (<div> Loading... </div>)
                }
                { (forecastToday && forecastToday.day && forecastToday.night)
                    ? (
                        <TodayForecastSummary 
                            dayQuickSummary={forecastToday.day.quickSummary}
                            nightQuickSummary={forecastToday.night.quickSummary} />
                    )
                    : (<div>Loading...</div>)
                }
                {
                    (
                        astronomy && 
                        astronomy.sunrise && 
                        astronomy.sunset && 
                        forecastToday && 
                        forecastToday.day &&
                        forecastToday.night && 
                        condition && 
                        condition.wind
                    ) 
                    ? (
                        <TodayWeatherStats 
                            sunrise={astronomy.sunrise}
                            sunset={astronomy.sunset}
                            chanceOfRain={isDayTime() ? forecastToday.day.chanceOfRain : forecastToday.night.chanceOfRain}
                            relativeHumidity={condition.relativeHumidity}
                            wind={condition.wind}
                            feelsLike={condition.feelsLike}
                            precipitation={condition.precipitation}
                            pressure={condition.pressure}
                            visibility={condition.visibility}
                            uv={condition.uv} />
                    )
                    : (<div>Loading...</div>)
                }
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
