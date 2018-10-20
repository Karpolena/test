import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import * as ActiveActions from "../../../../actions/Active";

import FolderCard from "../../../../components/card/FolderCard";

class FoldersSection extends Component {
    renderFolders = folders => {
        let _folders = [];
        folders.forEach(itm => {
            _folders.push(
                <FolderCard
                    key={itm.id}
                    folder={itm}
                    clicked={id => this.props.dispatch(ActiveActions.setActiveFolder(id))}
                    style={this.props.selectElement && this.props.selectElement.id === itm.id}
                />
            );
        });
        return _folders;
    };

    render() {
        let { folders } = this.props;
        if (!folders.size) return null;

        return (
            <Fragment>
                <h5>Папки</h5>
                <div key="folders">{this.renderFolders(folders)}</div>
            </Fragment>
        );
    }
}

FoldersSection.propTypes = {
    folders: PropTypes.object,
    selectElement: PropTypes.object,
    dispatch: PropTypes.func
};

export default FoldersSection;
