import React from 'react';
import CartDisplayItem from './CartDisplayItem/CartDisplayItem';

import classes from "./CartDisplay.module.css";


const cartDisplay = (props) => {
    
    return(   
         <div>
   <table className={classes.Table}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price (per item)</th>
                <th>Price (total)</th>
                </tr>
                
            </thead>
            
   <tbody>
        {props.cartItems.map((x, index) => 
        (<CartDisplayItem 
            key={index}
            name={x.item.name}
            quantity={x.quantity}
            priceEach={x.item.price}
            totalPerProduct={x.quantity * x.item.price}
        />)
        )}
   </tbody>
                           
   </table>

    <p className={classes.Total}>Total price for your order is: <span>{props.total} MKD</span> </p>
    </div>
    )
}
    
        
        

export default cartDisplay;

