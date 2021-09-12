import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ 
            search,
            results
        }),
        applyMiddleware(thunk, logger)
        );

        return store;
        
}
