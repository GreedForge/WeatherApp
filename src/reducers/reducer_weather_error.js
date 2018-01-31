import { FETCH_WEATHER_ERROR } from '../actions/index';

export default function(state=[], action) {
	switch(action.type){
        case FETCH_WEATHER_ERROR:
        alert("You misspelled the city name");
			return null;
    }
    return null;
}