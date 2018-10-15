import React from "react";
import { Switch, Route } from "react-router-dom";


import InnerFile from "./pages/InnerFile";
import InnerContent from "./pages/InnerContent";
import NotFound from "./pages/NotFound";

const Content = () => {
    return (
        <content className="content">
            <Switch>
                <Route exact path="/" component={InnerContent}/>
                <Route path="/folder/:id" component={InnerContent}/>
                <Route path="/file/:id" component={InnerFile} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </content>
    );
}

export default Content;