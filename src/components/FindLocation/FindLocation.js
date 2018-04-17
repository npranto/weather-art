import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import * as actionCreators from './../../actions';
import SearchForm from '../SearchForm/SearchForm';
import Locations from './../Locations/Locations';
import './FindLocation.css';

class FindLocation extends Component {
    render() {
        const {props} = this;
        const {locations, error} = props.findLocation;
        return (
            <div className="FindLocation">
                <SearchForm onQuerySubmit={(query) => props.fetchLocationsByQuery(query)} />
                <Locations locations={locations} error={error} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        findLocation: state.findLocation
    }
}

export default connect(mapStateToProps, actionCreators)(FindLocation);