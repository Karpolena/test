import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as FileActions from "../actions/File";
import * as FolderActions from "../actions/Folder";

class ModalCreate extends Component {
    state = {
        title: "",
        descriptions: ""
    };

    
    // file = {
    //     title: this.state.title,
    //     descriptions: this.state.descriptions,
    //     context: this.props.context
    // }

    // folder = {
    //     title: this.state.title,
    //     descriptions: this.state.descriptions,
    //     context: this.props.context
    // }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onCreateFolder = () => {
        // this.props.createFolder (this.folder); 
        this.props.createFolder ({
            title: this.state.title,
            descriptions: this.state.descriptions,
            context: this.props.context
        });
    };

    onCreateFile = () => {
        this.props.createFile({
            title: this.state.title,
            descriptions: this.state.descriptions,
            context: this.props.context
        });
    };

    onUpdateFolder = () => {
        this.props.updateFolder(
            {title: this.state.title,
            descriptions: this.state.descriptions,
            context: this.props.context},
            this.props.activeFolder
        );
    };

    onUpdateFile = () => {
        this.props.updateFile(
            {title: this.state.title,
            descriptions: this.state.descriptions,
            context: this.props.context},
            this.props.activeFile
        );
    };

    renderButton = () => {
        let { updateMode } = this.props;        
        return (
            updateMode 
            ?
            <Button type="submit" onClick={this.onUpdateSubmit}>Редактировать</Button>
            : 
            <Button type="submit" onClick={this.onCreateSubmit}>Создать</Button>
        )
    }

    onCreateSubmit = e => {
        e.preventDefault();
        if (this.props.folderType) {
            return this.onCreateFolder();
        }
        this.onCreateFile();
    };

    onUpdateSubmit = e => {
        e.preventDefault();
        if (this.props.folderType) {
            return this.onUpdateFolder();
        }
        this.onUpdateFile();
    };

    render() {
        return (
            <div>
                <Card
                    className="modal create"
                    style={{ display: this.props.show ? "block" : "none" }}
                >
                    <CardContent>
                        <form className="form" /* onSubmit={this.onSubmit}*/>
                            <label>Title</label>
                            <input
                                className="form__input"
                                type="text"
                                name="title"
                                placeholder="title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                            <label>Descriptions</label>
                            <input
                                className="form__input"
                                type="text"
                                name="descriptions"
                                placeholder="descriptions"
                                value={this.state.descriptions}
                                onChange={this.handleInputChange}
                            />
                            { this.renderButton() }
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

ModalCreate.propTypes = {
    openCreate: PropTypes.bool,
    show: PropTypes.bool,
    folderType: PropTypes.bool,
    dispatch: PropTypes.func,
    context: PropTypes.string,
    createFile: PropTypes.func,
    createFolder: PropTypes.func,
    updateFile: PropTypes.func,
    updateFolder: PropTypes.func,
    updateMode: PropTypes.bool,
    activeFile: PropTypes.string,
    activeFolder: PropTypes.string
};

const mapStateToProps = ({modalStore, pageStore, activeStore}) => {
    return {
        folderType: modalStore.folderType,
        fileType: modalStore.fileType,
        context: pageStore.context,
        updateMode: modalStore.updateMode,
        activeFile: activeStore.activeFile,
        activeFolder: activeStore.activeFolder
    };
};

export default connect(
    mapStateToProps,
    {
        createFolder: FolderActions.createFolder,
        createFile: FileActions.createFile,
        updateFolder: FolderActions.updateFolder,
        updateFile: FileActions.updateFile
    }
)(ModalCreate);
