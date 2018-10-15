import React, { Component } from "react";
import PropTypes from "prop-types";

class ActionPanelSection extends Component {
    clickHandler = () => {
        /* this.props. activeFolder 
        ? 
        () =>  this.props.dispatch(FolderActions.deleteFolderId(this.props.activeFolder))
        :
        () =>  this.props.dispatch(FileActions.deleteFileId(this.props.activeFile)) */
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
                <button className="nav-tools__btn" onClick={this.clickHandler}>
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
       if (this.props.context) {
           title = this.props.folder.title 
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
    context: PropTypes.string,
    file: PropTypes.object,
    folder: PropTypes.object
};

export default ActionPanelSection;
