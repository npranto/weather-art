import React, {Component} from 'react';

import './Locations.css';

class Locations extends Component {
    state = {
        locations: [
            {city: 'Boston', state: 'MA', country: 'United States'},
            {city: 'Braintree', state: 'CA', country: 'United States'},
            {city: 'Pabna', state: '', country: 'Bangladesh'},
            {city: 'Mumbai', state: 'Maharashtra', country: 'India'},
            {city: 'Boston', state: 'MA', country: 'United States'},
            {city: 'Braintree', state: 'CA', country: 'United States'},
            {city: 'Pabna', state: '', country: 'Bangladesh'},
            {city: 'Mumbai', state: 'Maharashtra', country: 'India'},
            {city: 'Boston', state: 'MA', country: 'United States'},
            {city: 'Braintree', state: 'CA', country: 'United States'},
            {city: 'Pabna', state: '', country: 'Bangladesh'},
            {city: 'Mumbai', state: 'Maharashtra', country: 'India'},
            {city: 'Boston', state: 'MA', country: 'United States'},
            {city: 'Braintree', state: 'CA', country: 'United States'},
            {city: 'Pabna', state: '', country: 'Bangladesh'},
            {city: 'Mumbai', state: 'Maharashtra', country: 'India'},
            {city: 'Boston', state: 'MA', country: 'United States'},
            {city: 'Braintree', state: 'CA', country: 'United States'},
            {city: 'Pabna', state: '', country: 'Bangladesh'},
            {city: 'Mumbai', state: 'Maharashtra', country: 'India'},
            {city: 'Boston', state: 'MA', country: 'United States'},
            {city: 'Braintree', state: 'CA', country: 'United States'},
            {city: 'Pabna', state: '', country: 'Bangladesh'},
            {city: 'Mumbai', state: 'Maharashtra', country: 'India'},
            {city: 'Boston', state: 'MA', country: 'United States'},
            {city: 'Braintree', state: 'CA', country: 'United States'},
            {city: 'Pabna', state: '', country: 'Bangladesh'},
            {city: 'Mumbai', state: 'Maharashtra', country: 'India'},
        ]
    }

    renderLocations(locations) {
        return locations.map((location, index) => {
            const stringified = Object
                .values(location)
                .filter(prop => prop && prop.toString().length > 0)
                .join(', ')
            return <a href="#" key={index}> {stringified} </a>
        })
    }

    render() {
        const {locations} = this.state;
        return (
            <div className="Locations">
                {
                    this.renderLocations(locations)
                }
            </div>
        )
    }
}

export default Locations;