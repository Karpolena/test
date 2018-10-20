import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Popover from "@material-ui/core/Popover";
import * as PopupActions from "./../../actions/Popup";

class Popup extends PureComponent {
    constructor() {
        super();
        this.domNode = document.getElementById("popup");
    }

    renderContent = () => {
        return (
            <Popover
                id="render-props-popover"
                open={this.props.isOpen}
                anchorEl={this.props.anchorEl}
                onClose={this.props.dispatch.bind(this, PopupActions.close())}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                transitionDuration={{
                    enter: 100,
                    exit: 0
                }}
            >
                {this.props.component}
            </Popover>
        );
    };

    render() {
        return createPortal(this.renderContent(), this.domNode);
    }
}

Popup.propTypes = {
    isOpen: PropTypes.bool,
    component: PropTypes.node,
    dispatch: PropTypes.func,
    anchorEl: PropTypes.any
};

export default connect(({ popupStore }) => {
    return {
        isOpen: popupStore.isOpen,
        component: popupStore.component,
        anchorEl: popupStore.anchorEl
    };
})(Popup);
