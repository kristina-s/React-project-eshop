import React from 'react';
import BrandName from './BrandName/BrandName';
import Navigation from './Navigation/Navigation';
import Cart from './Cart/Cart';
import './Header.css';

const header = (props) => {
    return (
        <div>
            <h3 className='Paragraph'>welocme to my awesome online flower-shop</h3>
            <div className='Nav-bar'>
                <BrandName clickLogo={props.clickLogo}/>
                <Navigation clickItem={props.clickItem}/>
                <Cart 
                    clickCart={props.clickCart}
                    itemsNumber={props.itemsNumber}/>
            </div>
            
        </div>
        
    )
}
export default header;