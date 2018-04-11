import React, {Component} from 'react';
import FaAlignRight from 'react-icons/lib/fa/align-right';

import WundergroundLogo from './../../assets/images/wunderground-logo.png';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <div className="wu-logo-container">
                    <img src={WundergroundLogo} alt="Weather Underground API Logo Credit"/>
                </div>
                <FaAlignRight size="32"/>
            </div>
        )
    }
}

export default Navigation;
