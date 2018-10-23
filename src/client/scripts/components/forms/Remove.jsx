import React, { Fragment } from "react";
import PropTypes from "prop-types";

import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as ModalActions from "./../../actions/Modal";

const styles = () => ({
    controls: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 24px 10px"
    }
});

const RemoveModal = (props) => {
    return (
        <Fragment>
            <DialogTitle id="alert-dialog-title">
                {props.title}
            </DialogTitle>
            
            <div className={props.classes.controls}>
                <Button
                    className={props.classes.button}
                    onClick={props.dispatch.bind(
                        this,
                        ModalActions.close()
                    )}
                >
                    {props.submitText}
                </Button>
                <Button
                    color="primary"
                    className={props.classes.button}
                    onClick={() => {
                        props.dispatch(ModalActions.close());
                        props.onSubmit();
                    }}
                >
                    Удалить
                </Button>
            </div>
        </Fragment>
    );
}
RemoveModal.defaultProps = {
    submitText: "Oтменить"
};
RemoveModal.propTypes = {
    dispatch: PropTypes.func,
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    classes: PropTypes.object,
    submitText: PropTypes.string
};

export default withStyles(styles)(RemoveModal);




