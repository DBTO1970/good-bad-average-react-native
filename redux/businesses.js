import * as ActionTypes from './ActionTypes';

export const businesses = ( state = {
    isLoading: true,
    errMess: null,
    businesses: []}, action) => {

        switch (action.type) {
            case ActionTypes.GIVE_BUSINESSES:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: null, 
                    businesses: action.payload
                };
            
            case ActionTypes.BUSINESSES_LOADING:
                return {
                    ...state, 
                    isLoading: true, 
                    errMess: null, 
                    businesses: []
                };

            case ActionTypes.BUSINESSES_FAILED:
                return {
                    ...state,
                    isLoading: false, 
                    businesses: [], 
                    errMess: action.payload
                };

            default:
                return state;
        }
    };