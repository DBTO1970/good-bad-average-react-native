import * as ActionTypes from './ActionTypes';

export const search = ( state = {
    isLoading: true,
    errMess: null,
    location: []}, action) => {

        switch (action.type) {
            case ActionTypes.SEARCH_LOCATION:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: null, 
                    location: []
                };
            
            case ActionTypes.SEARCH_FAILED:
                return {
                    ...state,
                    isLoading: false, 
                    errMess: true, 
                    location: []
                };
            default:
                return state;
        }
    }