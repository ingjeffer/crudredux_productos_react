import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from "redux-thunk";
import logger from 'redux-logger'

import reducers from "./reducers";

const middleware = [
    thunk,
    logger,
];
const composeEnhancers =  composeWithDevTools(
    // applyMiddleware(thunk, logger),
    applyMiddleware(...middleware),
)

// const composeEnhancers0 = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancersOld = composeEnhancers0(
//     applyMiddleware(...middleware)
// )


const store = createStore(
    reducers,
    // composeEnhancersOld,
    composeEnhancers
);

export default store;