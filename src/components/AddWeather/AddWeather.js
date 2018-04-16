import React, {Component} from 'react';
import MdAdd from 'react-icons/lib/md/add';

import './AddWeather.css';

class AddWeather extends Component {
    render() {
        return (
            <div className="AddWeather">
                <MdAdd plus={32}/>
            </div>
        )
    }
}

export default AddWeather;