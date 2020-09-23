
import React, { Component } from 'react';
import classes from './Home.module.css';
import AutoComplete from '../../components/AutoComplete/AutoComplete';
import SelectedCity from '../../components/SelectedCity/SelectedCity';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import Forecast from '../../components/Forecast/Forecast';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { requestCityById, getFavoriteCityById, requestLocation } from '../../redux/home/actions';
import ErrorBoundary from '../../containers/ErrorHandler/ErrorBoundary'



class Home extends Component {



  componentDidMount() {

    // Check if current location already saved inside sessionStorage

    const { onRequestLocation, onRequestCityById, name, id } = this.props;

    let location_id = sessionStorage.getItem('location_id')
    let location_name = sessionStorage.getItem('location_name')

    if (location_id === null || location_name === null) {
      onRequestLocation();
    }


    //Fire 3 Promises : 
    //1) Check if city exist on favorites inside localStorage
    //2) Fetch city by id 
    //3) Fetch forecasts by id

    onRequestCityById({ id: id, name: name })


  }




  render() {

    const { error, forecast, name, isPending, city, id, isCelcius } = this.props;


    return (
      <ErrorBoundary error={error}>
        <Spinner loading={isPending}>

          <AutoComplete />

          <div className={classes.Home}>

            <div className={classes.FirstRow}>

              <SelectedCity city={city} name={name} celcius={isCelcius} />

              <FavoriteButton id={id} name={name} />

            </div>


            <p className={classes.Title}>{city.WeatherText}</p>

            <Forecast isCelcius={isCelcius} forecast={forecast} />

          </div>

        </Spinner>
      </ErrorBoundary>
    );

  }
}




const mapStateToProps = (state) => {

  return {
    cityName: state.home.cityName,
    isPending: state.home.isPending,
    error: state.home.error,
    id: state.home.id,
    name: state.home.name,
    city: state.home.city,
    forecast: state.home.forecast,
    isExist: state.home.isExist,
    isDark: state.ui.isDark,
    isCelcius: state.ui.isCelcius,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    onRequestCityById: (citydetails) => dispatch(requestCityById(citydetails)),
    getFavoriteCityById: (id) => dispatch(getFavoriteCityById(id)),
    onRequestLocation: () => dispatch(requestLocation())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);