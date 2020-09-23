import classes from './ErrorBoundary.module.css';
import React ,{Component} from 'react';


class ErrorBoundary  extends Component{

      

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

export default ErrorBoundary;