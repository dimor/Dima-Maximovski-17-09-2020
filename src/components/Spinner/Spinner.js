import React from 'react';

import classes from './Spinner.module.css';

const spinner = (props) => {

    let content;

    if(props.loading){

        content =  <div className={classes.Loader}>Loading...</div>
    }else{

         content = props.children
    }

    return(content);


}

export default spinner;