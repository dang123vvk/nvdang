import { GET_PART_FIVES } from './types';
import { createAction } from '@reduxjs/toolkit';
import { getPartFives } from '../../helpers/service/partFive'
// import { isLoadingAction } from './userAction';

export const getPartFivesAction = createAction(GET_PART_FIVES);

export function exeGetPartFivesAction() {
  return async dispatch => {
    // dispatch(isLoadingAction({isLoading: true}))
    const data = await getPartFives();
    const list = data.data.results || [];
    dispatch(getPartFivesAction({ list }))
    // dispatch(isLoadingAction({isLoading: false}))
  }
}
