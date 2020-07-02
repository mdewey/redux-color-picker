import {connect} from 'react-redux'

import  { saturationChanged} from '../actions'

import Slider from '../Slider'


const mapStateToProps = state => ({
    value:state.colorReducer.saturation || 0 ,
    label:"saturation", 
    min:0,
    max:100
})

const mapDispatchToProps = dispatch => ({
    updateColor: newColorValue => dispatch(saturationChanged(newColorValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)