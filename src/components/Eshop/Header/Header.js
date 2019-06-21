import React from 'react';
import BrandName from './BrandName/BrandName';
import Navigation from './Navigation/Navigation';
import Cart from './Cart/Cart';
import './Header.css';

const header = (props) => {
    return (
        <div>
            <h2>Bonsai online flower-shop</h2>
            <div className='Nav-bar'>
                <BrandName />
                <Navigation clickItem={props.clickItem}/>
                <Cart />
                {/* <BrandName />
                <Navigation />
                <Cart />  */}
            </div>
            
        </div>
        
    )
}
export default header;