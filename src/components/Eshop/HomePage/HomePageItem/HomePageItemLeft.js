import React from 'react';
import classes from '../HomePage.module.css';


const homePageItemLeft = (props) => (
    <div className={classes.ImageLeft}>
        <img src={props.image} alt=""/>
        <p>{props.text}</p>
        

    </div>
)
export default homePageItemLeft;