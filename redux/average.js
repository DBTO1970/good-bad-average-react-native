import * as ActionTypes from './ActionTypes';

export const bad = ( state = {
    isLoading: true,
    errMess: null,
    good: false,
    bad: false,
    average: true,
    business: []}, action) => {

        switch (action.type) {
            case ActionTypes.GET_AVERAGE:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: null, 
                    good: false,
                    bad: false,
                    average: true,
                    business: []
                };
            
            case ActionTypes.AVERAGE_FAILED:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: action.payload, 
                    good: false,
                    bad: false,
                    average: true,
                    business: []
                };
            default:
                return state;
        }
    }