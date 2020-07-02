import React, {useState, useEffect} from 'react'
import HueContainer from './containers/HueContainer';
import LightnessContainer  from './containers/LightnessContainer'
import SaturationContainer  from './containers/SaturationContainer'
import { useMemo } from 'react';

export default function ColorPicker(props) {
    console.log({props})
    const {hue} = props.color ;
    const {lightness} = props.color;
    const {saturation}  = props.color;

    const [backgroundColor, setBackgroundColor] = useState('hsl(0,0,0)')

    useEffect(() => {
        setBackgroundColor(`hsla(${hue || 0},${saturation || 0}%,${lightness || 0}%,1)`)
    },[hue, lightness, saturation])

    return (
        <div>
            <header style={{backgroundColor: backgroundColor}}>
                You current colors : {backgroundColor}
            </header>
            <button onClick={() => props.hueChanged(120)}>Click me!</button>
            <HueContainer />
            <LightnessContainer/>
            <SaturationContainer/>
        </div>
    )
}
