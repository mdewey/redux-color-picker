import React from 'react'
import HueContainer from './containers/HueContainer';

export default function ColorPicker(props) {
    console.log({props})
    const {hue} = props.color ;
    const lightness = 0;
    const saturation  = 0;

    return (
        <div>
            <header>
                You current colors : hsl({hue || 0}, {saturation}, {lightness})
            </header>
            <button onClick={() => props.hueChanged(120)}>Click me!</button>
            <HueContainer />
            {/* <SliderContainer/>
            <SliderContainer/> */}
        </div>
    )
}
