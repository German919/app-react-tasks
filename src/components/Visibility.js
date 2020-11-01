import React from "react"

const Visibility = (props) => {

    const {description, isChecked, callback} = props
    
    return ( 
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                checked={isChecked}
                onChange={e => callback(e.target.checked)}
            />
            <label htmlFor="form-check-label"> Show {description}</label>
        </div>
     );
}
 
export default Visibility;