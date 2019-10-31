import React from 'react';
import BrandName from './BrandName/BrandName';
import Navigation from './Navigation/Navigation';
import Cart from './Cart/Cart';
import './Header.css';

const header = (props) => {
    return (
        <div>
            <h3 className='Paragraph'>welocme to my online flower-shop</h3>
            <div className='Nav-bar'>
                <BrandName clickLogo={props.clickLogo}/>
                <Navigation clickItem={props.clickItem}/>
                <div className="name-cart">
                    <p className="login-message"> Hello {props.name} </p>
                    <Cart 
                        clickCart={props.clickCart}
                        itemsNumber={props.itemsNumber}/>
                </div>
                
            </div>
        
        </div>
        
    )
}
export default header;