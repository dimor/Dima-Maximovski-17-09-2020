import { TOGGLE_DEGREE, TOGGLE_THEME ,TOGGLE_MENU } from './actionTypes';



const INITIAL_STATE = {
	isOpen:false,
	isDark:false,
	isCelcius:true,
};



const UiReducer = (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case TOGGLE_DEGREE:
			return { ...state, isCelcius: action.payload }
		case TOGGLE_THEME:
			return { ...state, isDark: action.payload }
		case TOGGLE_MENU:
			return { ...state, isOpen: action.payload }

		default:
			return state;

	};
}

export default UiReducer;