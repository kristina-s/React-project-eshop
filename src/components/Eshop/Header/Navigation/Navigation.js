import React from 'react';
import '../Header.css'

const navigation = (props) => {
    return(
        <div className="Nav-bar Select">
            
                <select name="dropdown" id="menu" onChange={props.clickItem}>
                <option value="" hidden>---   Choose Flower Type  ---</option>
                    <option 
                        value="Potted"
                        >Potted Flowers</option>
                    <option 
                        value="Branch"
                        >Branch Flowers</option>
                </select>
            
        </div>
    )
}
export default navigation;