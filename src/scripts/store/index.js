import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";

import reducers from "../reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = routerMiddleware(browserHistory);

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(middleware, thunk)
));



export default store;
