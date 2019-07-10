import React from 'react';
import './ProductCard.css';

const productCard = props => (
    <div className = "Card" >
        <img src={props.img} alt=""/>
        <h3>Name : {props.name}</h3>
        <p>Latin name : {props.latin}</p>
        <p>Price {props.price} MKD</p>
        <button onClick={() => props.add(props.theindex)} >Add to cart</button>
        <button onClick={() => props.showOne(props.theindex)} >Show details</button>
    </div>
)
export default productCard;