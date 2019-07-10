import React from 'react';
import '../Header.css'

const navigation = (props) => {
    return(
        <div className="Nav-bar Select">
            
                <select name="dropdown" id="menu" onChange={props.clickItem}>
                <option value="" hidden>---   Choose Flower Type  ---</option>
                    <option 
                        value="pot-flower"
                        >Potted Flowers</option>
                    <option 
                        value="branch-flower"
                        >Branch Flowers</option>
                </select>
            
        </div>
    )
}
export default navigation;