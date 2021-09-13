import { createStore, applyMiddleware, 
    combineReducers } from 'redux';
import { businesses } from './businesses';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ 
            
            businesses
        }),
        applyMiddleware(thunk, logger)
        );

        return store;
        
}
