import React, {Component} from 'react';

import './Locations.css';

class Locations extends Component {
    renderLocations(locations) {
        return locations.map((location, index) => {
            return <a href="#" key={index}> {location.name}, {location.c}  </a>
        })
    }
    render() {
        const {locations, error} = this.props;
        console.log(locations, error);
        return (
            <div className="Locations">
                {
                    !error.status 
                        ? <p> {error.message} </p> 
                        : this.renderLocations(locations)
                }
            </div>
        )
    }
}

export default Locations;