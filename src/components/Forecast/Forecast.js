import React ,{Component} from 'react';
import classes from './Forecast.module.css';
import ForecastItem from './ForecastItem/ForecastItem';
import {convertDegree} from '../../utils';




class Forecast extends Component{



    getDayName=(dateStr)=>{

        let date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'long' });        

    }


    render(){

        const {forecast,theme,isCelcius} = this.props;
      
  
        let forecastitems =
        forecast.map((item,i)=>{
            return <ForecastItem theme={theme} key={i} degree={convertDegree(item.Temperature.Maximum.Value,isCelcius)} day={`${this.getDayName(item.Date)}`} />
        })


    return(
        
        <div className={classes.Forecast}>
            
            {forecastitems}

        </div>
        
        
        );   
    }
}




    export default Forecast;