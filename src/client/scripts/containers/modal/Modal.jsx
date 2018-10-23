import React, { PureComponent } from "react";
/* import { createPortal } from "react-dom"; */
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import * as ModalActions from "./../../actions/Modal";

class Modal extends PureComponent {
    constructor() {
        super();
        /*  this.domNode = document.getElementById("modal"); */
    }

    renderContent = () => {
        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.props.dispatch.bind(this, ModalActions.close())}
                aria-labelledby="form-dialog-title"
                transitionDuration={{
                    enter: 100,
                    exit: 0
                }}
            >
                <span>{this.props.component}</span>
            </Dialog>
        );
    };

    render() {
        //return createPortal(this.renderContent(), this.domNode);
        return this.renderContent();
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    component: PropTypes.node,
    dispatch: PropTypes.func
};

export default connect(({ modalStore }) => {
    return {
        isOpen: modalStore.isOpen,
        component: modalStore.component
    };
})(Modal);
