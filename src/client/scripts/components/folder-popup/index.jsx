import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { push } from "react-router-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Folder from "@material-ui/icons/CreateNewFolder";
import { connect } from "react-redux";
import CreateModal from "./../forms/Create";
import UpdateModal from "./../forms/Update";
import * as PopupActions from "./../../actions/Popup";
import * as ModalActions from "./../../actions/Modal";
import * as FolderActions from "../../actions/Folder";

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

class FolderMenu extends Component {
    openUpdateFolder = () => {
        this.props.dispatch(PopupActions.close());
        this.props.dispatch(
            ModalActions.open(
                <UpdateModal
                    title="Обновление папки"
                    element={this.props.folder}
                    onSubmit={data => {
                        this.props.dispatch(
                            FolderActions.updateFolder(
                                data,
                                this.props.folder.id
                            )
                        );
                    }}
                    dispatch={this.props.dispatch}
                    submitText="Сохранить"
                />
            )
        );
    };
    openCreateFolder = () => {
        this.props.dispatch(PopupActions.close());
        this.props.dispatch(
            ModalActions.open(
                <CreateModal
                    dispatch={this.props.dispatch}
                    title="Создание папки"
                    onSubmit={data => {
                        this.props.dispatch(
                            FolderActions.createFolder({
                                ...data,
                                context: this.props.context
                            })
                        );
                    }}
                />
            )
        );
    };
    redirectFolder =() => {
        this.props.dispatch(PopupActions.close());
        this.props.dispatch(push(`/folder/${this.props.folder.id}`));  
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button onClick={this.openUpdateFolder}>
                        <ListItemIcon className={classes.icon}>
                            <Folder />
                        </ListItemIcon>
                        <ListItemText primary="Переименовать папку" />
                    </ListItem>
                    <ListItem button onClick={this.openCreateFolder}>
                        <ListItemIcon className={classes.icon}>
                            <Folder />
                        </ListItemIcon>
                        <ListItemText primary="Создать папку" />
                    </ListItem>
                    <ListItem button onClick={this.redirectFolder}>
                        <ListItemIcon className={classes.icon}>
                            <Folder />
                        </ListItemIcon>
                        <ListItemText primary="Открыть папку" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

FolderMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
    context: PropTypes.string,
    folder: PropTypes.object
};

export default withStyles(styles)(
    connect(({ pageStore }) => ({ 
        context: pageStore.context
     }))(FolderMenu)
);
