import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MdAdd from 'react-icons/lib/md/add';

import './AddWeather.css';

class AddWeather extends Component {
    render() {
        return (
            <div className="AddWeather">
                <Link to="/search">
                    <MdAdd size={32}/>
                </Link>
            </div>
        )
    }
}

export default AddWeather;