
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import { Router, browserHistory } from "react-router";
import { HashRouter } from "react-router-dom";
// import { syncHistoryWithStore } from "react-router-redux";

import App from "./App";
import "./../scss/main.scss"
import store from "./store";

// const history = syncHistoryWithStore(browserHistory, store)


render (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById("root")
);
