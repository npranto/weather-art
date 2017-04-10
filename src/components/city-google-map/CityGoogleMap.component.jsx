import React, {Component} from 'react';

import './CityGoogleMap.component.css';

class CityGoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const map = new google.maps.Map(this.refs.cityMap, {
          zoom: 12,
          center: {
          	lat: this.props.lat, 
          	lng: this.props.lon
          }
        })
        new google.maps.Marker({
          position: {
          	lat: this.props.lat, 
          	lng: this.props.lon
          },
          map: map
        });
	}

	render() {
		return (
			<div ref="cityMap" />
		)
	}
}

export default CityGoogleMap;