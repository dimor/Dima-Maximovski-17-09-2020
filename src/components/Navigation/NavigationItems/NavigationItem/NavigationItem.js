import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink ,withRouter } from 'react-router-dom';



const navigationItem = (props) => {

    const handleClick=(link)=>{
        props.history.push(link);
    }

    return(
    <li className={classes.NavigationItem}>
        <p 
            onClick={()=>handleClick(props.link)}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</p>
    </li>
)};

export default withRouter(navigationItem);