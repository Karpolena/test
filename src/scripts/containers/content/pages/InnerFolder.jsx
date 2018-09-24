import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as FolderActions from "../../../actions/Folder";


class InnerFolder extends Component {

    componentDidMount() {
        this.fetchFolder(this.props);
    }
    componentWillReceiveProps(props) {
        this.fetchFolder(props);
    }

    fetchFolder = (props) => {
        this.props.dispatch(FolderActions.getFolderId(props.match.params.id));
    }
    render() {
        let {folder} = this.props;
        if (!folder || folder.id.toString() !==this.props.match.params.id) return null;
        return( 
            <div className="innerFolder">
                {folder.id}
                <br />
                {folder.content}
            </div>
        )
    } 
} 



const mapStateToProps = state => {
    return{
        folder: state.folderStore.folder
    }
}

InnerFolder.propTypes = {
    dispatch: PropTypes.func,
    folder: PropTypes.object,
    match: PropTypes.object
}

export default connect(mapStateToProps)(InnerFolder);