import React from 'react';
import Cart from '../../../../assets/cart-02.png'

const cart = (props) => (
    <div className="Nav-bar Brand">
        <img src={Cart} alt="" onClick={props.clickCart} />
        <p>{props.itemsNumber}</p>
    </div>
)

export default cart;