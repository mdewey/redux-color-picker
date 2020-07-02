import React from 'react'

export default function Slider(props) {
    console.log("slider", {props});
    
    return (
        <div>
            <label htmlFor="">{props.label}</label>
            <input 
                min={props.min} 
                max={props.max} 
                type="range" 
                onChange={e => props.updateColor(e.target.value)} 
                value={props.value} 
            />
        </div>
    )
}
