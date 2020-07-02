import {connect } from 'react-redux'

import {hueChanged} from '../actions'

import ColorPicker from '../ColorPicker'


const mapStateToProps = state => ({
    color:state.colorReducer
})

const mapDispatchToProps = dispatch => ({
    hueChanged: newColorValue => dispatch(hueChanged(newColorValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)