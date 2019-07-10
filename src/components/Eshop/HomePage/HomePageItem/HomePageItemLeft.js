import React from 'react';
import classes from '../HomePage.module.css';


const homePageItemLeft = (props) => (
    <div className={classes.ImageLeft}>
        <img src={props.image} alt=""  />
        <p>{props.text}</p>

        <button
            className={classes.ButtonLk}
            value={props.eventValue} 
            onClick={props.clickItem} >take me to collection</button>
    </div>
)
export default homePageItemLeft;