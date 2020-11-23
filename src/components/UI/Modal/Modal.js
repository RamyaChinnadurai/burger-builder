import React from 'react';
import classes from './Modla.css';

const modal = () => {
    return(
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}

export default modal;