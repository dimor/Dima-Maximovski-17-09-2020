import classes from './ErrorBoundary.module.css';
import React ,{Component} from 'react';
import { connect } from 'react-redux';
import {throwError} from '../../redux/home/actions'
class ErrorBoundary  extends Component{



 
    componentDidCatch(error, errorInfo) {

      const {onThrowError} = this.props;

      onThrowError(error);
     
 
    }
  
      

        render() {

            const {error} = this.props;


            if (error) {
              return(
              <div className={classes.ErrorBoundary}>
                  <h1>Something went wrong :( </h1>
                  <p>{'Please Try Again Later'}</p>
             </div>);
            }
            return this.props.children; 
          }


}


const mapStateToProps = (state) => {

  return {
    error: state.home.error
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    onThrowErrorHome: (error) => dispatch(throwError(error))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ErrorBoundary);