import { combineReducers } from 'redux';

import { HUE_CHANGED } from '../actions';


const colorReducer = (state = {}, action) => {
    console.log({ state, action });
    switch (action.type) {
        case HUE_CHANGED:
            return { ...state, hue: action.value };

        default:
            return state;
    }
};

const colorApp = combineReducers({ colorReducer });


export default colorApp;