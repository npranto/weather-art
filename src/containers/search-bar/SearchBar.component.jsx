import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchWeatherAction} from './../../actions/index.js';

import './SearchBar.component.css';

class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			city: ''
		}
		this.updateInputChanges = this.updateInputChanges.bind(this);
		this.fetchWeatherByCity = this.fetchWeatherByCity.bind(this);
		this.clearSearchField = this.clearSearchField.bind(this);
	}

	// updates state with input changes
	updateInputChanges(event) {
		this.setState({
			city: event.target.value
		})
		console.log(event.target.value);
	}

	// searches term based of 'searchTerm' prop in state
	fetchWeatherByCity(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.city);
		console.log('SUBMITTED: ', this.state.city);
		this.clearSearchField();
	}

	// clears input field when 'x' is clicked
	clearSearchField(event) {
		this.setState({
			city: ''
		})
	}

	render() {
		return (
			<nav>
		    <div className="nav-wrapper">
		      <form onSubmit={this.fetchWeatherByCity}>
		        <div className="input-field">
		          <input 
		          	id="search" 
		          	type="search"
		          	value={this.state.city}
		          	placeholder="Search for city, i.e., Boston"
		          	onChange={this.updateInputChanges} 
		          	required />
		          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
		          <i className="material-icons" onClick={this.clearSearchField}>close</i>
		        </div>
		      </form>
		    </div>
		  </nav>
		)
	}

}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchWeather: fetchWeatherAction
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);






