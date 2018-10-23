import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { push } from "react-router-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import File from "@material-ui/icons/NoteAdd";
import { connect } from "react-redux";
import CreateModal from "./../forms/Create";
import UpdateModal from "./../forms/Update";
import * as PopupActions from "./../../actions/Popup";
import * as ModalActions from "./../../actions/Modal";
import * as FileActions from "../../actions/File";

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

class FileMenu extends Component {
    openUpdateFile = () => {
        this.props.dispatch(PopupActions.close());
        this.props.dispatch(
            ModalActions.open(
                <UpdateModal
                    title="Обновление файла"
                    element={this.props.file}
                    onSubmit={data => {
                        this.props.dispatch(
                            FileActions.updateFile(
                                data,
                                this.props.file.id
                            )
                        );
                    }}
                    dispatch={this.props.dispatch}
                    submitText="Сохранить"
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
                    onSubmit={data => {
                        this.props.dispatch(
                            FileActions.createFile({
                                ...data,
                                context: this.props.context
                            })
                        );
                    }}
                />
            )
        );
    };
    redirectFile =() => {
        this.props.dispatch(PopupActions.close());
        this.props.dispatch(push(`/file/${this.props.file.id}`));  
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button onClick={this.openUpdateFile}>
                        <ListItemIcon className={classes.icon}>
                            <File />
                        </ListItemIcon>
                        <ListItemText primary="Переименовать файл" />
                    </ListItem>
                    <ListItem button onClick={this.redirectFile}>
                        <ListItemIcon className={classes.icon}>
                            <File />
                        </ListItemIcon>
                        <ListItemText primary="Открыть файл" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

FileMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
    context: PropTypes.string,
    file: PropTypes.object
};

export default withStyles(styles)(
    connect(({ pageStore }) => ({ 
        context: pageStore.context
     }))(FileMenu)
);
