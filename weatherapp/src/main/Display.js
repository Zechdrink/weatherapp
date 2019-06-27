import React from 'react'

const Display = (props) => {
    return ( 
        <div className = "display">
            <p>{props.tempData.temp ? `Current: ${Math.round(1.8 * (props.tempData.temp - 273) + 32)}° F` : null }</p>
            <p>{props.tempData.temp_min ? `Low: ${Math.round(1.8 * (props.tempData.temp_min - 273) + 32)}° F` : null }</p>
            <p>{props.tempData.temp_max ? `High: ${Math.round(1.8 * (props.tempData.temp_max - 273) + 32)}° F` : null }</p>
        </div>
     );
}
 
export default Display;