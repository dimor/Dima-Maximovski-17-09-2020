
import { CHANGE_SEARCH_FIELD, UPDATE_CITY_NAME,UPDATE_CITY_ID } from './actionTypes';
import { RequestSearchField, RequestCityById, SetFavoriteCity, GetFavoriteCityById, RequestLocation } from './actionTypes';
import * as CONSTANTS from '../../constants';

const INITIAL_STATE = {
	input: '',
	isPending: 'false',
	error: '',
	suggestions:'',
	city:'',
	forecast:'',
	isExist:false,
	id:CONSTANTS.defaults.id,
	name:CONSTANTS.defaults.name,
	currentLocation:false
};



const HomeReducer = (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, input: action.payload }
		case UPDATE_CITY_NAME:
			return { ...state, name: action.payload }
		case UPDATE_CITY_ID:
			return { ...state, id: action.payload }
	
		case RequestSearchField.FETCH_SEARCH_PENDING:
			return { ...state, isPending: false }
		case RequestSearchField.FETCH_SEARCH_SUCCESS:
			return { ...state, isPending: false, suggestions: action.payload }
		case RequestSearchField.FETCH_SEARCH_FAILED:
			return { ...state, error: action.payload, isPending: false }

			case RequestLocation.FETCH_LOCATION_PENDING:
				return { ...state, isPending: true }
			case RequestLocation.FETCH_LOCATION_SUCCESS:
				return { ...state, isPending: false, currentLocation:true, id:action.payload.Key, name: action.payload.LocalizedName }
			case RequestLocation.FETCH_LOCATION_FAILED:
				return { ...state, error: action.payload, isPending: false }


		case RequestCityById.FETCH_CITY_PENDING:
			return { ...state, isPending: true }
		case RequestCityById.FETCH_CITY_SUCCESS:
			return { ...state, isPending: false,
				isExist:action.payload[2]?true:false,
				city: action.payload[0][0],
				forecast: action.payload[1].DailyForecasts }
		case RequestCityById.FETCH_CITY_FAILED:
			return { ...state, error: action.payload, isPending: true }

		case SetFavoriteCity.SET_FAVORITE_PENDING:
			return { ...state, isPending: true }
		case SetFavoriteCity.SET_FAVORITE_SUCCESS:
			return { ...state, isPending: false ,isExist: action.payload  }
		case SetFavoriteCity.SET_FAVORITE_FAILED:
			return { ...state, error: action.payload, isPending: true }

		case GetFavoriteCityById.GET_FAVORITE_PENDING:
			return { ...state}
		case GetFavoriteCityById.GET_FAVORITE_SUCCESS:
			return { ...state, isExist: action.payload }
		case GetFavoriteCityById.GET_FAVORITE_FAILED:
			return { ...state, error: action.payload }





		default:
			return state;

	};
}

export default HomeReducer;