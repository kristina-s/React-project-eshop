import React from 'react';
import "../CartDisplay.module.css";


const cartDisplayItem = (props) => (
    <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{props.priceEach}</td>
        <td>{props.totalPerProduct}</td>
    </tr>
)
export default cartDisplayItem;