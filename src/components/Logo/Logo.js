import React  from 'react';
import logoApp from '../../assets/images/logo.png'
import logoDarkApp from '../../assets/images/logo-dark.png'
import classes from './Logo.module.css';

const logo =(props)=>(

    <div className={classes.Logo} style={{height:props.height}} >
        <img src={props.theme?logoDarkApp:logoApp} alt='logo' />
    </div>

);
export default logo;