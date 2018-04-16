import React, {Component} from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Locations from './../Locations/Locations';
import './FindLocation.css';

class FindLocation extends Component {
    render() {
        return (
            <div className="FindLocation">
                <SearchForm onQuerySubmit={(query) => console.log(query)} />
                <Locations />
            </div>
        )
    }
}

export default FindLocation;