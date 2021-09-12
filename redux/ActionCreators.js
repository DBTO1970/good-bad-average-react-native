import * as ActionTypes from './ActionTypes';

export const fetchSearch = () => dispatch => {
    return fetch('search')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(search => dispatch(searchLocation(search)))
    .catch(error => dispatch(searchFailed(error.message)));
};

export const searchFailed = errMess => ({
    type: ActionTypes.SEARCH_FAILED,
    payload: errMess
});

export const searchLocation = search => ({
    type: ActionTypes.SEARCH_LOCATION,
    payload: search
});

export const fetchResults = () => dispatch => {
    dispatch(resultsLoading());

    return fetch('results')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(results => dispatch(giveResults(results)))
    .catch(error => dispatch(resultsFailed(error.message)));
};

export const resultsLoading =() => ({
    type: ActionTypes.RESULTS_LOADING
});

export const resultsFailed = () => ({
    type: ActionTypes.RESULTS_FAILED,
    payload: errMess
});

export const giveResults = () => ({
    type: ActionTypes.GIVE_RESULTS,
    payload: results
});

