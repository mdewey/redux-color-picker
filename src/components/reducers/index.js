import { combineReducers } from 'redux';

import { HUE_CHANGED, LIGHTNESS_CHANGED, SATURATION_CHANGED } from '../actions';


const colorReducer = (state = {}, action) => {
    console.log({ state, action });
    switch (action.type) {
        case HUE_CHANGED:
            return { ...state, hue: action.value };
        case LIGHTNESS_CHANGED:
            return { ...state, lightness: action.value };
        case SATURATION_CHANGED:
            return { ...state, saturation: action.value };
        default:
            return state;
    }
};

const colorApp = combineReducers({ colorReducer });


export default colorApp;