import {connect} from 'react-redux'

import  {lightnessChanged} from '../actions'

import Slider from '../Slider'


const mapStateToProps = state => ({
    value:state.colorReducer.lightness || 0 ,
    label:"lightness", 
    min:0,
    max:100
})

const mapDispatchToProps = dispatch => ({
    updateColor: newColorValue => dispatch(lightnessChanged(newColorValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)