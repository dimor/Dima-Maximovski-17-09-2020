import { CHANGE_SEARCH_FIELD, UPDATE_CITY_NAME, UPDATE_CITY_ID,THROW_ERROR} from './actionTypes';
import { RequestSearchField } from './actionTypes';
import { RequestCityById,
         SetFavoriteCity,
          GetFavoriteCityById,
        RequestLocation } from './actionTypes';
import * as CONSTANTS from '../../constants';



const asyncLocalStorage = {
        setItem: (key, value) => {
                return Promise.resolve().then(() => {
                        localStorage.setItem(key, value);
                });
        },
        getItem: (key) => {
                return Promise.resolve().then(() => {
                        return localStorage.getItem(key);
                });
        },
        removeItem: (key) => {
                return Promise.resolve().then(() => {
                        localStorage.removeItem(key);
                })
        }

};



export const throwError = (error) => ({

        type: THROW_ERROR,
        payload: error

})

export const setSearchField = (input) => ({

        type: CHANGE_SEARCH_FIELD,
        payload: input

})

export const updateCityId = (id, name) => (dispatch) => {

        dispatch({ type: UPDATE_CITY_NAME, payload: name })
        dispatch({ type: UPDATE_CITY_ID, payload: id })

}



export const requestLocation=()=>(dispatch)=>{

        dispatch({ type: RequestLocation.FETCH_LOCATION_PENDING })

        const success=(position)=> {
                const latitude  = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetch(`${CONSTANTS.URLS.currentlocation}?apikey=${CONSTANTS.API}&q=${latitude}%2C${longitude}`)
                .then(response => response.json())
                .then(result =>{

                        sessionStorage.setItem('location_id', result.Key);
                        sessionStorage.setItem('location_name', result.LocalizedName);

                       return  dispatch({ type: RequestLocation.FETCH_LOCATION_SUCCESS ,payload:result })
                }
          )
                .catch(err=>  dispatch({ type: RequestLocation.FETCH_LOCATION_FAILED , payload:err } ))
              }
              
              const error=()=> {
               dispatch({ type: RequestLocation.FIND_LOCATION_FAILED , payload:false })
              }


        navigator.geolocation.getCurrentPosition(success, error)

}








export const requestSearchField = (input) => (dispatch) => {

        dispatch({ type: CHANGE_SEARCH_FIELD, payload: input })
        if (input) {
                dispatch({ type: RequestSearchField.FETCH_SEARCH_PENDING })
                fetch(`${CONSTANTS.URLS.autocomplete}?apikey=${CONSTANTS.API}&q=${input}`)
                        .then(response => response.json())
                        .then(data => dispatch({ type: RequestSearchField.FETCH_SEARCH_SUCCESS, payload: data }))
                        .catch(error => dispatch({ type: RequestSearchField.FETCH_SEARCH_FAILED, payload: error }))
        }

}


export const requestCityById = (citydetails) => (dispatch) => {
        dispatch({ type: CHANGE_SEARCH_FIELD, payload: '' })
        dispatch({ type: UPDATE_CITY_NAME, payload: citydetails.name })
        dispatch({ type: UPDATE_CITY_ID, payload: citydetails.id })
        dispatch({ type: RequestCityById.FETCH_CITY_PENDING })
        let promiseGetCityFromFavorites = asyncLocalStorage.getItem(citydetails.id);
        let promiseCity = fetch(`${CONSTANTS.URLS.currentcity}${citydetails.id}?apikey=${CONSTANTS.API}`);
        let promiseForecast = fetch(`${CONSTANTS.URLS.forecast}${citydetails.id}?apikey=${CONSTANTS.API}&metric=true`);
        const promises = [promiseCity, promiseForecast, promiseGetCityFromFavorites];
        return Promise.all(promises)
                .then(responses => Promise.all(responses.map(r => {

                        if (typeof r === 'string' || r === null) {
                                return r
                        }
                        else {
                                return r.json();
                        }

                })))
                .then(results => dispatch({ type: RequestCityById.FETCH_CITY_SUCCESS, payload: results }))
                .catch((err) => dispatch({ type: RequestCityById.FETCH_CITY_FAILED, payload: err }))

}




export const setFavoriteCity = (id, name, isExist) => (dispatch) => {
        dispatch({ type: SetFavoriteCity.SET_FAVORITE_PENDING })
        Promise.resolve().then(() => {
                if (isExist) {
                        return asyncLocalStorage.removeItem(id)
                } else {
                        return asyncLocalStorage.setItem(id, name)
                }
        })
                .then(dispatch({ type: SetFavoriteCity.SET_FAVORITE_SUCCESS, payload: !isExist }))
                .catch((err) => dispatch({ type: SetFavoriteCity.SET_FAVORITE_FAILED, payload: err }))

}


export const getFavoriteCityById = (id) => (dispatch) => {

        dispatch({ type: GetFavoriteCityById.GET_FAVORITE_PENDING })
        asyncLocalStorage.getItem(id)
                .then(result => dispatch({ type: GetFavoriteCityById.GET_FAVORITE_SUCCESS, payload: result ? true : false }))
                .catch((err) => dispatch({ type: GetFavoriteCityById.GET_FAVORITE_FAILED, payload: err }))

}


