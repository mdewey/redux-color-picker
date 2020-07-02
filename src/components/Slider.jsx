import React from 'react'

export default function Slider(props) {
    console.log("slider", {props});
    
    return (
        <div>
            <label htmlFor="">sliiiider</label>
            <input min={0} max={360} type="range" onChange={e => props.updateColor(e.target.value)} value={props.value} name="" id=""/>
        </div>
    )
}
