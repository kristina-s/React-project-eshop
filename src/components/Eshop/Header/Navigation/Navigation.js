import React from 'react';
import '../Header.css'

const navigation = (props) => {
    return(
        <div className="Nav-bar Select">
            
                <select name="dropdown" id="menu" onChange={props.clickItem}>
                <option value="" hidden>--   Please Choose Type  ---</option>
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