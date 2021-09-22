import * as ActionTypes from './ActionTypes';

export const good = ( state = {
    isLoading: true,
    errMess: null,
    good: true,
    bad: false,
    average: false,
    business: []}, action) => {

        switch (action.type) {
            case ActionTypes.GET_GOOD:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: null, 
                    good: true,
                    bad: false,
                    average: false,
                    business: []
                };
            
            case ActionTypes.GOOD_FAILED:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: action.payload, 
                    good: true,
                    bad: false,
                    average: false,
                    business: []
                };
            default:
                return state;
        }
    }