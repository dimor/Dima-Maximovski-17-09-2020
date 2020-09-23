import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (

    <header className={classes.Toolbar}>


        <DrawerToggle clicked={props.clicked} />
        <div className={classes.Logo}><Logo theme={props.theme} /></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isDark={props.theme}
                isCelcius={props.isCelcius}
                celciusclicked={props.celciusclicked}
                darkclicked={props.darkclicked}
                closed={props.clicked}
            />
        </nav>


    </header>

);


export default toolbar;