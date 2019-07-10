import React from 'react';
import classes from './OneFlowerCard.module.css';



const oneFlowerCard = (props) => (
    <div className={classes.OneCard}>
        <div className={classes.Parts}>
            <p><b>{props.flower.name}</b></p>
            <img src={props.flower.titleImage} alt=""/>
            
            <p><i>Latin: {props.flower.latinName}</i></p>
        </div>
        <div className={classes.Parts}>
            <p>Humidity: <img className={classes.SmallImage} src={props.flower.humidity} width="50" height="50"/></p>
            <p>Light needed: <img className={classes.SmallImage} src={props.flower.light} width="50" height="50"/></p>
            <p>Blooming time: {props.flower.bloomTime}</p>
            <p>More info: {props.flower.description}</p>
        </div>
        
        <button className={classes.Back} onClick={props.goBack}>back</button>
    </div>
)



export default oneFlowerCard;