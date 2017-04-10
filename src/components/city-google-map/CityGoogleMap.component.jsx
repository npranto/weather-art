import React, {Component} from 'react';

import './CityGoogleMap.component.css';

class CityGoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		new google.maps.Map(this.refs.cityMap, {
          zoom: 12,
          center: {
          	lat: this.props.lat, 
          	lng: this.props.lon
          }
        })
	}

	render() {
		return (
			<div ref="cityMap" />
		)
	}
}

export default CityGoogleMap;