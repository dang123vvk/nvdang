import { createReducer } from '@reduxjs/toolkit'
import { SIGN_IN, SIGN_UP } from '../action/types'

const defaultUserData = {
    userInformation: {
        isAuthenticated: false,
    }
};

const userReducer = createReducer(
    defaultUserData,
    {
        [SIGN_UP]: (state, action) => {
            if (action && action.payload) {
                return { ...state, ...action.payload }; //assign new object
            }
            return state;
        },
        [SIGN_IN]: (state, action) => {
            if (action && action.payload) {
                return { ...state, ...action.payload } //add a new property in current object
            }
            return state;
        }
    }
);

export default userReducer;