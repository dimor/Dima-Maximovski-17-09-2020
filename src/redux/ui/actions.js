import { TOGGLE_DEGREE, TOGGLE_THEME ,TOGGLE_MENU } from './actionTypes';



export const toggleDegree = (isCelcius) => ({

        type: TOGGLE_DEGREE,
        payload: isCelcius

})



export const toggleTheme = (isDark) => ({

        type: TOGGLE_THEME,
        payload: isDark

})





export const toggleMenu = (isOpen) => ({

        type: TOGGLE_MENU,
        payload: isOpen

})


