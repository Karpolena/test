import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
    container: {
        width: "100%",
        maxWidth: "360px",
        padding: "0 24px 24px"
    },
    textField: {
        marginLeft: 0,
        marginRight: 0,
        width: "100%"
    },
    controls: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 24px 10px"
    }
});

class CreateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            descriptions: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <DialogTitle id="alert-dialog-title">
                    {this.props.title}
                </DialogTitle>
                <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="filled-title"
                        name="title"
                        label="title"
                        className={classes.textField}
                        value={this.state.title}
                        onChange={this.onChange}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-description"
                        label="descriptions"
                        name="descriptions"
                        multiline
                        rows="1"
                        className={classes.textField}
                        value={this.state.descriptions}
                        onChange={this.onChange}
                        margin="normal"
                        variant="filled"
                    />
                </form>
                <div className={classes.controls}>
                    <Button className={classes.button}>Отмена</Button>
                    <Button color="primary" className={classes.button}>
                        Создать
                    </Button>
                </div>
            </Fragment>
        );
    }
}

CreateModal.propTypes = {
    dispatch: PropTypes.func,
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    classes: PropTypes.object
};

export default withStyles(styles)(CreateModal);
