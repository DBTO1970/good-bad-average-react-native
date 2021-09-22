import * as ActionTypes from './ActionTypes';

export const bad = ( state = {
    isLoading: true,
    errMess: null,
    good: false,
    bad: true,
    average: false,
    business: []}, action) => {

        switch (action.type) {
            case ActionTypes.GET_BAD:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: null, 
                    good: false,
                    bad: true,
                    average: false,
                    business: []
                };
            
            case ActionTypes.BAD_FAILED:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: action.payload, 
                    good: false,
                    bad: true,
                    average: false,
                    business: []
                };
            default:
                return state;
        }
    }