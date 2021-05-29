import { createReducer } from '@reduxjs/toolkit'
import { GET_PART_FIVES} from '../action/types'

const partFiveData = {
    list: []
};

const partFiveReducer = createReducer(
    partFiveData,
    {
        [GET_PART_FIVES]: (state, action) => {
            if (action && action.payload) {
                return { ...state, list: action.payload.list }; //assign new object
            }
            return state;
        }
    }
);

export default partFiveReducer;