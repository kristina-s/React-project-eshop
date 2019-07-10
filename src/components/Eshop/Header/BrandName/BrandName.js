import React from 'react';
import Logo from '../../../../assets/logo.png'

const brandName = (props) => (
    <div className="Nav-bar Brand" onClick={props.clickLogo}>
        <img src={Logo} alt="" />
        <p>home</p>
    </div>
    
)

export default brandName;