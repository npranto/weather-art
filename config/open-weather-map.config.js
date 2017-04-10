const config = {
	key: 'e89459bbb766e2ce2b9002a6913af00f'
}

export const fetchWeatherByCity = (city)=>{
	return `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${config.key}`;
}

