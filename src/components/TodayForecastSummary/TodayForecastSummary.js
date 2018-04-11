import React, {Component} from 'react';

import './TodayForecastSummary.css';

class TodayForecastSummary extends Component {
    render() {
        return (
            <div className="TodayForecastSummary">
                <p className="condition-summary">
                    <strong> Today: </strong> Partly cloudy in the morning, then clear. High of 20C. Windy. Winds from the West at 20 to 35 km/h.
                </p>
            </div>
        )
    }
}

export default TodayForecastSummary;