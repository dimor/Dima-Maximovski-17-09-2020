import React from 'react';
import classes from './ForecastItem.module.css';


const forecastItem =(props)=>{


    return(
    
        <div onClick={props.click} className={classes.ForecastItem}>
            
            {props.city?<h3>{props.city}</h3>:null}{props.id?<span>{props.id}</span>:null}
            <p>{props.degree}</p>
            <p>{props.day}</p>

        </div>
        
        
        );   

    
}

export default forecastItem;