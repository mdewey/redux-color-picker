import {connect} from 'react-redux'

import  {hueChanged} from '../actions'

import Slider from '../Slider'


const mapStateToProps = state => ({
    color:state.colorReducer
})

const mapDispatchToProps = dispatch => ({
    hueChanged: newColorValue => dispatch(hueChanged(newColorValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)