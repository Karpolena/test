import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import InnerFile from "./pages/InnerFile";
import InnerContent from "./pages/InnerContent";
import NotFound from "./pages/NotFound";
import * as ActiveActions from "./../../actions/Active";

const Content = ({ removeActive }) => {
    return (
        <content className="content" onClick={removeActive}>
            <Switch>
                <Route exact path="/" component={InnerContent} />
                <Route path="/folder/:id" component={InnerContent} />
                <Route path="/file/:id" component={InnerFile} />
                <Route path="/not-found" component={NotFound} />
                <Route path="*" component={NotFound} />
            </Switch>
        </content>
    );
};

Content.propTypes = {
    removeActive: PropTypes.func
};

export default withRouter(
    connect(
        null,
        { removeActive: ActiveActions.removeActive }
    )(Content)
);
