import React from 'react';
import classes from '../HomePage.module.css';


const homePageItemRight = (props) => (
    <div className={classes.ImageRight}>
        <img src={props.image} alt=""/>
        <p>{props.text}</p>
        

    </div>
)
export default homePageItemRight;