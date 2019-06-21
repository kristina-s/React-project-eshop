import React from 'react';

const navigation = (props) => {
    return(
        <div className="Nav-bar">
            <p>Select type of flowers: </p>
            <select name="dropdown" id="menu" onChange={props.clickItem}>
                <option 
                    value="branch-flower"
                    >Potted Flowers</option>
                <option 
                    value="pot-flower"
                    >Branch Flowers</option>
            </select>
        </div>
    )
}
export default navigation;