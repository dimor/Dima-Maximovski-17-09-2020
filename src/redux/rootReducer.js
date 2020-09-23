import {combineReducers} from 'redux';

import HomeReducer from './home/homeReducer';
import FavoriteReduer from './favorites/favoritesReducer';
import UiReducer from './ui/uiReducer';

export default combineReducers({

	home : HomeReducer,
	favorites:FavoriteReduer,
	ui:UiReducer

});