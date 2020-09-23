import * as CONSTANTS from '../../constants';
import {RequestFavoritesCities} from './actionTypes';





export const requestFavoritesCities=()=>(dispatch)=>{

    
    let cityIds = {...localStorage}

    let requests = Object.keys(cityIds).map(id=> fetch(`${CONSTANTS.URLS.currentcity}${id}?apikey=${CONSTANTS.API}`));
    dispatch({type:RequestFavoritesCities.FETCH_FAVORITES_CITIES_PENDING,isPending:true})
    Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(cities => cities.map((city,i)=>{
       return {...city[0],id:Object.keys(cityIds)[i],name:Object.values(cityIds)[i]}
    }))
    .then(updatedCities=>dispatch({type:RequestFavoritesCities.FETCH_FAVORITES_CITIES_SUCCESS,isPending:false,payload:updatedCities}))
    .catch(err=>dispatch({type:RequestFavoritesCities.FETCH_FAVORITES_CITIES_FAILED,isPending:false,payload:err}))

}

