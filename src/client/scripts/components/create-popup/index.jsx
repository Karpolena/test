import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Folder from "@material-ui/icons/CreateNewFolder";
import File from "@material-ui/icons/NoteAdd";
import { connect } from "react-redux";
import CreateModal from "./../modal/Create";
import * as PopupActions from "./../../actions/Popup";
import * as ModalActions from "./../../actions/Modal";

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    icon: {
        margin: 0
    }
});

class PageMenu extends Component {
    openCreateFolder = () => {
        this.props.dispatch(PopupActions.close());
        this.props.dispatch(
            ModalActions.open(
                <CreateModal
                    dispatch={this.props.dispatch}
                    title="Создание папки"
                    onSubmit={() => {
                        debugger
                    }}
                />
            )
        );
    };

    openCreateFile = () => {
        this.props.dispatch(PopupActions.close());
        this.props.dispatch(
            ModalActions.open(
                <CreateModal
                    dispatch={this.props.dispatch}
                    title="Создание файла"
                    onSubmit={() => {
                        debugger
                    }}
                />
            )
        );
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button onClick={this.openCreateFolder}>
                        <ListItemIcon className={classes.icon}>
                            <Folder />
                        </ListItemIcon>
                        <ListItemText primary="Создать папку" />
                    </ListItem>
                    <ListItem button onClick={this.openCreateFile}>
                        <ListItemIcon className={classes.icon}>
                            <File />
                        </ListItemIcon>
                        <ListItemText primary="Создать файл" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

PageMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func
};

export default withStyles(styles)(connect(null)(PageMenu));
