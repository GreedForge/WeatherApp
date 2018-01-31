import axios from 'axios';

const API_KEY = 'e147375be9790db0d4099f228c22e320';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';


function fetchWeatherSuccess(response) {
	return {
		type: FETCH_WEATHER,
		payload: response
	}
}

function fetchWeatherError(error){

	return {
		type: FETCH_WEATHER_ERROR,
		payload: error
	}
}
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	return dispatch => {
		axios.get(url)
			.then((response)=>{
				dispatch(fetchWeatherSuccess(response));
			})
			.catch((error)=>{
				dispatch(fetchWeatherError(error));
			})
	}
}
