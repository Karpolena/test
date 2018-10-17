import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as PageActions from "../../../actions/Page";
import * as ActiveActions from "../../../actions/Active";
import { TYPE } from "./../../../constants/Page";

import ActionPanelSection from "./sections/ActionPanel";
import FoldersSection from "./sections/Folders";
import FilesSection from "./sections/Files";

class InnerContent extends Component {
    componentDidMount() {
        let { match, dispatch } = this.props;
        dispatch(ActiveActions.removeActive());
        dispatch(PageActions.getPage({ type: TYPE.FOLDER, context: match.params.id }));
    }

    componentWillReceiveProps(props) {
        let { match, dispatch } = props;
        if (this.props.match.params.id !== match.params.id) {
            dispatch(ActiveActions.removeActive());
            dispatch(PageActions.getPage({ type: TYPE.FOLDER, context: match.params.id }));
        }
    }

    renderActionPanel = () => {
        return (
            <ActionPanelSection
                activeFile={this.props.activeFile}
                activeFolder={this.props.activeFolder}
                contextElement={this.props.contextElement}
                dispatch={this.props.dispatch}
            />
        );
    };
    renderFolders = () => {
        return (
            <FoldersSection
                folders={this.props.folders}
                activeFolder={this.props.activeFolder}
                dispatch={this.props.dispatch}
            />
        );
    };
    renderFiles = () => {
        return (
            <FilesSection
                files={this.props.files}
                activeFile={this.props.activeFile}
                dispatch={this.props.dispatch}
            />
        );
    };

    renderFetchingBlock = () => {
        let { fetching, folders, files } = this.props;

        if(fetching) {
            return (
                <div>Загрузка...</div>
            )
        } 

        if(!folders.size && !files.size) {
            return (
                <div>Нет данных</div>
            )
        }
        return null;
    };

    render() {
        return (
            <div className="home">
                {this.renderActionPanel()}
                {this.renderFolders()}
                {this.renderFiles()}
                {this.renderFetchingBlock()}
            </div>
        );
    }
}

const mapStateToProps = ({ pageStore, activeStore, folderStore, fileStore }) => {
    return {
        folder: folderStore.folder,
        folders: folderStore.folders,
        files: fileStore.files,
        context: pageStore.context,
        fetching: pageStore.fetching,
        activeFile: activeStore.activeFile,
        activeFolder: activeStore.activeFolder,
        contextElement: pageStore.contextElement
    };
};

InnerContent.propTypes = {
    dispatch: PropTypes.func,
    folder: PropTypes.object,
    folders: PropTypes.object,
    files: PropTypes.object,
    context: PropTypes.string,
    match: PropTypes.object,
    history: PropTypes.object,
    fetching: PropTypes.bool,
    activeFile: PropTypes.string,
    activeFolder: PropTypes.string,
    contextElement: PropTypes.object
};

export default connect(mapStateToProps)(InnerContent);
