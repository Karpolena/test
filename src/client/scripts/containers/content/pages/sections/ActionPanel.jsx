import React, { Component } from "react";
import PropTypes from "prop-types";

import * as FolderActions from "../../../../actions/Folder";
import * as FileActions from "../../../../actions/File";

class ActionPanelSection extends Component {
    removeHandler = () => {
        this.props.activeFolder 
        ? 
        this.props.dispatch(FolderActions.removeFolder(this.props.activeFolder))
        :
        this.props.dispatch(FileActions.removeFile(this.props.activeFile)) 
    };

    renderEditButton = () => {
        return (
            <li title="Редактировать">
                <button className="nav-tools__btn">
                    <i className="icon fas fa-edit" />
                </button>
            </li>
        );
    };

    renderRemoveButton = () => {
        return (
            <li title="Удалить">
                <button className="nav-tools__btn" onClick={this.removeHandler}>
                    <i className="icon fas fa-trash" />
                </button>
            </li>
        );
    };

    render() {
        let className = ["nav"];
        if (!this.props.activeFile && !this.props.activeFolder) {
            className.push("none");
        }
        let title = "";
        if (this.props.contextElement) {
            title = this.props.contextElement.title;
        }
        return (
            <header className="header line">
                <div className="header-left">
                    <p>Мой диск</p>
                    <p>{title}</p>
                </div>
                <nav className={className.join(" ")}>
                    <ul className="nav-tools">
                        {this.renderEditButton()}
                        {this.renderRemoveButton()}
                    </ul>
                </nav>
            </header>
        );
    }
}

ActionPanelSection.propTypes = {
    activeFile: PropTypes.string,
    activeFolder: PropTypes.string,
    contextElement: PropTypes.object,
    dispatch: PropTypes.func
};

export default ActionPanelSection;
