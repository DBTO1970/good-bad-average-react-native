import * as ActionTypes from './ActionTypes';

export const search = ( state = {
    
    errMess: null,
    search: []}, action) => {

        switch (action.type) {
            case ActionTypes.SEARCH_LOCATION:
                return {
                    ...state, 
                    isLoading: false, 
                    errMess: null, 
                    search: []
                };
            
            case ActionTypes.SEARCH_FAILED:
                return {
                    ...state, 
                    errMess: true, 
                    search: []
                };
        }
    }