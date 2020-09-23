import React , {Component} from 'react';
import classes from './FavoriteButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {setFavoriteCity } from '../../redux/home/actions';

class FavoriteButton extends Component {


 

    render(){

        const {id,name,setFavoriteCity,isExist,isDark} = this.props;

        let color='';

        if(isDark){

            if(isExist){
                color='red'
            }else{
                color='grey'
            }

        }else{
            if(isExist){
                color='red'
            }else{
                color='black'
            }


        }



        return (
            <div className={classes.FavoriteButton}>
                <button onClick={()=>setFavoriteCity(id,name,isExist)}>
                    <FontAwesomeIcon icon={faHeart} size="2x" style={{ color:color }} />
                    <p>{isExist?'Saved':'Add to Favorites'} </p>
                </button>
            </div>
        );
    }
 
}


const mapStateToProps =(state)=>{

    return{
        isExist: state.home.isExist,
        isDark:state.ui.isDark
    }
}


const mapDispatchToProps=(dispatch)=>{
 
    return{

        setFavoriteCity : (id,name,isExist)=> dispatch(setFavoriteCity(id,name,isExist))
    }

}






export default connect(mapStateToProps,mapDispatchToProps)(FavoriteButton); 