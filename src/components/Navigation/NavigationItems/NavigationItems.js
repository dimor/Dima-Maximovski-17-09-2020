import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import { faAdjust, faThermometerFull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const navigationItems = (props) => (
    <React.Fragment>


        <ul className={classes.NavigationItems} onClick={props.clicked}>
            <NavigationItem link={`/`} exact>Home</NavigationItem>
            <NavigationItem link={`/favorites`} >Favorites</NavigationItem>
            <div className={classes.set}>
                <button onClick={props.darkclicked}>
                    <FontAwesomeIcon  className={classes.Settings}
                     icon={faAdjust} size="2x"
                     style={{ color: props.isDark?'white':'black' }}
                 />
                 
                 </button>

                <button onClick={props.celciusclicked}>
                    <p  style={{ color: props.isCelcius?'black':'white' }} className={classes.degree}>°F</p>
                    <FontAwesomeIcon
                    className={classes.Settings} icon={faThermometerFull} size="2x" 
                    style={{ color: props.isCelcius?'black':'white' }} />
                </button>
            </div>
        </ul>



    </React.Fragment>
);

export default navigationItems;