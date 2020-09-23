import React, { Component } from 'react';
import classes from './Favorites.module.css';
import ForecastItem from '../../components/Forecast/ForecastItem/ForecastItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestFavoritesCities } from '../../redux/favorites/actions'
import { requestCityById, updateCityId } from '../../redux/home/actions';
import Spinner from '../../components/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import { convertDegree } from '../../utils';
import ErrorBoundary from '../../containers/ErrorHandler/ErrorBoundary'


class Favorites extends Component {

    componentDidMount() {
        const { onRequestFavoritesCities } = this.props;
        onRequestFavoritesCities();
    }


    handleClick = (id, name, history, updateCityId) => {
        updateCityId(id, name)
        history.push('/')
    }

    render() {
        const { error, history, favorites, isPending, updateCityId, isCelcius } = this.props;



        let updatedList = { ...favorites };

        if (Object.keys(updatedList).length === 0) {
            updatedList = <p> Please Add Your Favorite Cities :)</p>
        } else {
            updatedList = favorites.map((city, i) =>
                <ForecastItem
                    key={i + city.EpochTime}
                    city={city.name}
                    degree={convertDegree(city.Temperature.Metric.Value, isCelcius)}
                    day={city.WeatherText}
                    click={() => this.handleClick(city.id, city.name, history, updateCityId)} />

            )
        }



        return (
            <ErrorBoundary error={error}>
                <Spinner loading={isPending}>
                    <span className={classes.Favorites}>
                        {updatedList}
                    </span>
                </Spinner>
            </ErrorBoundary>
        );
    }

}


const mapStateToProps = state => {

    return {
        error: state.favorites.error,
        favorites: state.favorites.favorites,
        isPending: state.favorites.isPending,
        value: state.favorites.value,
        isDark: state.ui.isDark,
        isCelcius: state.ui.isCelcius
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onRequestFavoritesCities: () => dispatch(requestFavoritesCities()),
        requestCityById: ({ cityDetails }) => dispatch(requestCityById({ cityDetails })),
        updateCityId: (id, name) => dispatch(updateCityId(id, name))
    }


}



export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Favorites);