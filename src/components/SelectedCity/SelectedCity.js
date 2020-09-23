import React from 'react';
import classes from './SelectedCity.module.css';
import * as CONSTANTS from '../../constants';
import {convertDegree} from '../../utils';

const selectedCity = (props) => {

    const {city, name } = props;
    
    return (
      
        <div className={classes.SelectedCity}>

            <img src={`${CONSTANTS.URLS.iconurl}${city.WeatherIcon>9?'':'0'}${city.WeatherIcon}-s.png`} alt='icon' />
            <div>
                <strong>{name}</strong>
                <p>{convertDegree(city.Temperature.Metric.Value,props.celcius)}</p>

            
            </div>


        </div>


    );
}

export default selectedCity;