import React from 'react';
import classes from './AutoComplete.module.css';
import searchIcon from '../../assets/icons/search_icon.png';
import {connect} from 'react-redux';
import {requestCityById,requestSearchField} from '../../redux/home/actions';




class AutoComplete extends React.Component {



    render(){
      
        const { suggestions,input,onRequestSearch,onRequestCityById} = this.props;

      

        let suggestionsListComponent;
          if(input){
            if (suggestions.length) {
              suggestionsListComponent = (
                <ul className={classes.Suggestions}>
                  {suggestions.map((suggestion) => {
                    return (
                      <li key={suggestion.Key} onClick={()=>{
                        
                        const  citydetails = {id:suggestion.Key,name:suggestion.LocalizedName}
                        return onRequestCityById(citydetails)
                        }}>
                        {`${suggestion.LocalizedName} , ${suggestion.Country.LocalizedName}`}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div className={classes.None}>
                  <em>No Suggestions</em>
                </div>
              );
            }
          }
     
    

        return (
            <React.Fragment>
            <div className={classes.Wrap}>
                <div className={classes.Search}>
                    <input onChange={(e)=>onRequestSearch(e.target.value)} type="text" className={classes.SearchTerm} placeholder="City name" />
                        <button type="submit" className={classes.SearchButton}>
                            <i><img src={searchIcon} alt="icon" /></i>
                        </button>
                </div>
            </div> 
            {suggestionsListComponent}
            </React.Fragment>

        );
    }

}


const mapStateToProps = (state) => {

    return {

      input : state.home.input ,
      suggestions: state.home.suggestions,
      isPending: state.home.isPending,
      error : state.home.error

    }
}


const mapDispatchToProps = (dispatch) =>{

  return {

    onRequestSearch : (input) => dispatch (requestSearchField(input)),
    onRequestCityById : (citydetails)=> dispatch(requestCityById(citydetails))

  }
}






export default connect(mapStateToProps,mapDispatchToProps)(AutoComplete);