import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as PageActions from "../../../actions/Page";
/* import * as ActiveActions from "../../../actions/Active"; */
import { TYPE } from "./../../../constants/Page";

import ActionPanelSection from "./sections/ActionPanel";
import FoldersSection from "./sections/Folders";
import FilesSection from "./sections/Files";
import Spinner from "../../../components/spinner/Spinner";

class InnerContent extends Component {
    componentDidMount() {
        let { match, dispatch } = this.props;
        dispatch(
            PageActions.getPage({ type: TYPE.FOLDER, context: match.params.id })
        );
    }

    componentWillReceiveProps(props) {
        let { match, dispatch } = props;
        if (this.props.match.params.id !== match.params.id) {
            dispatch(
                PageActions.getPage({
                    type: TYPE.FOLDER,
                    context: match.params.id
                })
            );
        }
    }

    renderActionPanel = () => {
        let element = null;
        if (this.props.selectElement) {
            if (this.props.selectElement.type === TYPE.FOLDER) {
                element = this.props.folders.get(this.props.selectElement.id);
            } else {
                element = this.props.files.get(this.props.selectElement.id);
            }
        }
        return (
            <ActionPanelSection
                selectElement={this.props.selectElement}
                contextElement={this.props.contextElement}
                element={element}
                dispatch={this.props.dispatch}
            />
        );
    };
    renderFolders = () => {
        return (
            <FoldersSection
                folders={this.props.folders}
                selectElement={this.props.selectElement}
                dispatch={this.props.dispatch}
            />
        );
    };
    renderFiles = () => {
        return (
            <FilesSection
                files={this.props.files}
                selectElement={this.props.selectElement}
                dispatch={this.props.dispatch}
            />
        );
    };

    renderFetchingBlock = () => {
        let { fetching, folders, files } = this.props;

        if (fetching) {
            return <Spinner/>;
        }

        if (!folders.size && !files.size) {
            return <div className="message">Нет данных</div>;
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

const mapStateToProps = ({
    pageStore,
    activeStore,
    folderStore,
    fileStore
}) => {
    return {
        folder: folderStore.folder,
        folders: folderStore.folders,
        files: fileStore.files,
        context: pageStore.context,
        fetching: pageStore.fetching,
        selectElement: activeStore.selectElement,
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
    selectElement: PropTypes.object,
    contextElement: PropTypes.object
};

export default connect(mapStateToProps)(InnerContent);
