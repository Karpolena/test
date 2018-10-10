import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import * as ActiveActions from "../../../../actions/Active";

import FileCard from "../../../../components/FileCard";

class FilesSection extends PureComponent {
    renderFiles = folders => {
        let _folders = [];
        folders.forEach(itm => {
            _folders.push(
                <FileCard
                    key={itm.id}
                    file={itm}
                    clicked={id => this.props.dispatch(ActiveActions.setActiveFile(id))}
                    style={this.props.activeFile === itm.id}
                />
            );
        });
        return _folders;
    };

    render() {
        let { files } = this.props;
        if (!files.size) return null;

        return (
            <Fragment>
                <h5>Файлы</h5>
                <div key="files">{this.renderFiles(files)}</div>
            </Fragment>
        );
    }
}

FilesSection.propTypes = {
    files: PropTypes.object,
    activeFile: PropTypes.string,
    dispatch: PropTypes.func
};

export default FilesSection;
