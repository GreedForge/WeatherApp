import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import WeatherReducerError from './reducer_weather_error';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  weatherError: WeatherReducerError
});

export default rootReducer;
