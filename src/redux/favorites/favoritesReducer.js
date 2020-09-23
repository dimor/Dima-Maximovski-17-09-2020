
import { RequestFavoritesCities } from './actionTypes';




const INITIAL_STATE = {
    isPending: false,
    error: '',
    favorites:[],
    value:'hi'
};



const FavoriteReduer = (state = INITIAL_STATE, action) => {

    switch (action.type) {


        case RequestFavoritesCities.FETCH_FAVORITES_CITIES_PENDING:
            return { ...state, isPending: true };
        case RequestFavoritesCities.FETCH_FAVORITES_CITIES_SUCCESS:
            return { ...state, isPending: false , favorites:action.payload};
        case RequestFavoritesCities.FETCH_FAVORITES_CITIES_FAILED:
            return { ...state, isPending: false , error:action.payload };
        default:
            return state;

    }



}


export default FavoriteReduer;