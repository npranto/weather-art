import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                <Link to="/gallery"> 
                    <FaAlignRight size="32"/>
                </Link>
            </div>
        )
    }
}

export default Navigation;
