import FETCH_WEATHER from './../actions/'

const store = (state = [], action)=>{
	console.log('ACTION: ', action);
	switch(action.type) {
		case 'FETCH_WEATHER':
			return [action.payload.data, ...state];
	}
	return state;
}

export const WeatherReducer = store;