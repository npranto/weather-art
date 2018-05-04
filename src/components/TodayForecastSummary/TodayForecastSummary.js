import React, {Component} from 'react';
import MdWbSunny from 'react-icons/lib/md/wb-sunny';
import FaMoonO from 'react-icons/lib/fa/moon-o';

import './TodayForecastSummary.css';

class TodayForecastSummary extends Component {
    render() {
        const { dayQuickSummary, nightQuickSummary } = this.props;
        return (
            <div className="TodayForecastSummary">
                <div className="condition-summary">
                    <div className="summary-block day">
                        <div className="icon">
                            <MdWbSunny size={32} /> 
                        </div>
                        <p> {dayQuickSummary} </p>
                    </div>
                    <div className="summary-block night">
                        <div className="icon">
                            <FaMoonO size={32} /> 
                        </div>
                        <p> {nightQuickSummary} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodayForecastSummary;