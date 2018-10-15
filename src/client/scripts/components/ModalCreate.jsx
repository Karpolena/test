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
        content: "",
        descriptions: ""
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onCreateFolder = () => {
        this.props.createFolder({
            title: this.state.title,
            descriptions: this.state.descriptions,
            context: this.props.context
        });
    };

    onCreateFile = () => {
        this.props.createFile({
            title: this.state.title,
            descriptions: this.state.descriptions,
            content: this.state.content,
            context: this.props.context
        });
    };

    renderContentField = () => {
        let { folderType } = this.props;
        if (!folderType) {
            return (
                <div className="modal__textarea">
                    <label>Content</label>
                    <textarea
                        className="modal__input"
                        type="text"
                        name="content"
                        placeholder="content"
                        rows="10"
                        value={this.state.content}
                        onChange={this.handleInputChange}
                    />
                </div>
            );
        }
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.props.folderType) {
            return this.onCreateFolder();
        }
        this.onCreateFile();
    };

    render() {
        return (
            <div>
                <Card
                    className="modal create"
                    style={{ display: this.props.show ? "block" : "none" }}
                >
                    <CardContent>
                        <form className="modal__form" onSubmit={this.onSubmit}>
                            <label>Title</label>
                            <input
                                className="modal__input"
                                type="text"
                                name="title"
                                placeholder="title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                            <label>Descriptions</label>
                            <input
                                className="modal__input"
                                type="text"
                                name="descriptions"
                                placeholder="descriptions"
                                value={this.state.descriptions}
                                onChange={this.handleInputChange}
                            />
                            {this.renderContentField()}
                            <Button type="submit">Создать</Button>
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
    createFolder: PropTypes.func
};

const mapStateToProps = state => {
    return {
        folderType: state.modalStore.folderType,
        fileType: state.modalStore.fileType,
        context: state.pageStore.context
    };
};

export default connect(
    mapStateToProps,
    {
        createFolder: FolderActions.createFolder,
        createFile: FileActions.createFile
    }
)(ModalCreate);
