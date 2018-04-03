import axios from 'axios';
import {formatEndpointResponse} from './index.js';

const request = async (endpoint) => {
    const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          host: 'http://localhost:3000/',
          port: 3000
        }
    }
    const locationsStatus = await axios.get(endpoint, options);
    locationsStatus
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch(error => console.log(error))
}

export default request;
