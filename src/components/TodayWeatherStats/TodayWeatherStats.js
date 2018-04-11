import React, {Component} from 'react';

import WeatherStat from '../WeatherStat/WeatherStat';
import './TodayWeatherStats.css';

class TodayWeatherStats extends Component {
    render() {
        return (
            <div className="TodayWeatherStats">
                <WeatherStat />
                <div className="WeatherStat">   
                    <p className="label right"><sub> Sunset </sub></p>
                    <p className="value right"> 7:21 PM </p>
                </div>
                <WeatherStat />
                <div className="WeatherStat">   
                    <p className="label right"><sub> Humidity </sub></p>
                    <p className="value right"> 91% </p>
                </div>
                <div className="WeatherStat">   
                    <p className="label left"><sub> Wind </sub></p>
                    <p className="value left"> NW 4 mph </p>
                </div>
                <div className="WeatherStat">   
                    <p className="label right"><sub> Feels Like </sub></p>
                    <p className="value right"> 29&deg; </p>
                </div>
                <div className="WeatherStat">   
                    <p className="label left"><sub> Precipitation </sub></p>
                    <p className="value left"> 0 in </p>
                </div>
                <div className="WeatherStat">   
                    <p className="label right"><sub> Pressure </sub></p>
                    <p className="value right"> 30.2 inHg </p>
                </div>
                <div className="WeatherStat">   
                    <p className="label left"><sub> Visibility </sub></p>
                    <p className="value left"> 1,060.8 yd </p>
                </div>
                <div className="WeatherStat">   
                    <p className="label right"><sub> UV Index </sub></p>
                    <p className="value right"> 0 </p>
                </div>
            </div>
        )
    }
}

export default TodayWeatherStats;