import React, {Component} from 'react';

import WeatherStat from '../WeatherStat/WeatherStat';
import { twelveHourFormat } from './../../services/helpers';
import './TodayWeatherStats.css';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

class TodayWeatherStats extends Component {
    render() {
        const { 
            sunrise, 
            sunset, 
            chanceOfRain, 
            relativeHumidity, 
            wind, 
            feelsLike, 
            precipitation,
            pressure,
            visibility, 
            uv 
        } = this.props;
        return (
            <div className="TodayWeatherStats">
                
                <div className="WeatherStat">   
                    <p className="label left"><sub> Sunrise </sub></p>
                    <p className="value left"> {twelveHourFormat(sunrise.hour)}:{sunrise.minute} <sub>AM</sub> </p>
                </div>

                <div className="WeatherStat">   
                    <p className="label right"><sub> Sunset </sub></p>
                    <p className="value right"> {twelveHourFormat(sunset.hour)}:{sunset.minute} <sub>PM</sub> </p>
                </div>

                <div className="WeatherStat">   
                    <p className="label left"><sub> Chance of Rain </sub></p>
                    <p className="value left"> {chanceOfRain}% </p>
                </div>
                
                <div className="WeatherStat">   
                    <p className="label right"><sub> Relative Humidity </sub></p>
                    <p className="value right"> {relativeHumidity} </p>
                </div>
                
                <div className="WeatherStat">   
                    <p className="label left"><sub> Wind </sub></p>
                    <p className="value left"> {wind.direction} {wind.speed} mph </p>
                </div>

                <div className="WeatherStat">   
                    <p className="label right"><sub> Feels Like </sub></p>
                    <p className="value right"> {feelsLike}&deg; </p>
                </div>
                
                <div className="WeatherStat">   
                    <p className="label left"><sub> Precipitation </sub></p>
                    <p className="value left"> {precipitation} in </p>
                </div>
                
                <div className="WeatherStat">   
                    <p className="label right"><sub> Pressure </sub></p>
                    <p className="value right"> {pressure} inHg </p>
                </div>
                
                <div className="WeatherStat">   
                    <p className="label left"><sub> Visibility </sub></p>
                    <p className="value left"> {visibility} mi </p>
                </div>
                
                <div className="WeatherStat">   
                    <p className="label right"><sub> UV Index </sub></p>
                    <p className="value right"> {uv} </p>
                </div>

            </div>
        )
    }
}

export default TodayWeatherStats;