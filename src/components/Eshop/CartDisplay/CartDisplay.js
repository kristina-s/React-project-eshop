import React, { Component } from 'react';
import CartDisplayItem from './CartDisplayItem/CartDisplayItem';
import OrderForm from './OrderComponent';
import classes from "./CartDisplay.module.css";


class CartDisplay extends Component {
        state = {
            showFormComponent: false,
        }

        showOrderForm = () => {
            this.setState({showFormComponent: !this.state.showFormComponent})
        }
        render(){
            return(   
                <div>
        <table className={classes.Table}>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price (per item)</th>
                        <th>Price (total)</th>
                        <th></th>
                        </tr>
                        
                    </thead>
                    
        <tbody>
                {this.props.cartItems.map((x, index) => 
                (<CartDisplayItem 
                    key={index}
                    name={x.item.name}
                    quantity={x.quantity}
                    priceEach={x.item.price}
                    totalPerProduct={x.quantity * x.item.price}
                    delete={this.props.deleteItem}
                />)
                )}
        </tbody>
                                
        </table>

            <p className={classes.Total}>Total price for your order is: <span>{this.props.total} MKD</span> </p>
            <button onClick={this.showOrderForm}>Complete order</button>
            {this.state.showFormComponent ? <OrderForm pay={this.props.pay} payMessage={this.props.payMessage}/> : null }
            </div>
            )
    }
}
    
        
        

export default CartDisplay;

