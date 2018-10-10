import React from "react";
import { Switch, Route } from "react-router-dom";

/* import Home from "./pages/Home"; */
import InnerFile from "./pages/InnerFile";
import InnerFolder from "./pages/InnerFolder";
import NotFound from "./pages/NotFound";

const Content = () => {
    return (
        <content className="content">
            <Switch>
                <Route exact path="/" component={InnerFolder}/>
                <Route path="/folder/:id" component={InnerFolder}/>
                <Route path="/file/:id" component={InnerFile} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </content>
    );
}

export default Content;