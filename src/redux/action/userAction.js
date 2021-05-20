import { SIGN_IN, SIGN_UP, IS_LOADING } from './types';
import { createAction } from '@reduxjs/toolkit';
// import { signIn, signUp } from '../../helpers/service/auth'
// import cookie from 'react-cookies';

export const signInAction = createAction(SIGN_IN);
export const signUpAction = createAction(SIGN_UP);
// export const isLoadingAction = createAction(IS_LOADING);

export function exeSignInAction() {
  return dispatch => {
    const userInformation =  {isAuthenticated: false}
    dispatch(signInAction({ userInformation }))
  }
}
export function exeSignUpAction() {
  return dispatch => {
    let userInformation = {
      isAuthenticated: false,
    }
    dispatch(signUpAction({ userInformation }))
  }
}
