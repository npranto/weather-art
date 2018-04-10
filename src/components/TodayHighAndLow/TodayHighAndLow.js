import React, {Component} from 'react';

import './TodayHighAndLow.css';

class TodayHighAndLow extends Component {
    render() {
        return (
            <div className="TodayHighAndLow">
                <div className="today">
                    Wednesday, April 10
                </div>
                <div className="temperature-high-low">
                    <p className="high"> 105 </p>
                    <p className="low"> 104 </p>
                </div>
            </div>
        )
    }
}

export default TodayHighAndLow;
