import {connect} from 'react-redux'

import  {hueChanged} from '../actions'

import Slider from '../Slider'


const mapStateToProps = state => ({
    value:state.colorReducer.hue || 0 ,
    label:"hue",
    min:0,
    max:360
})

const mapDispatchToProps = dispatch => ({
    updateColor: newColorValue => dispatch(hueChanged(newColorValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)