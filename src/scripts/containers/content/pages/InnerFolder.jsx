import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as FolderActions from "../../../actions/Folder";


class InnerFolder extends Component {

    componentDidMount() {
        this.fetchFolder(this.props);
    }
    // componentWillReceiveProps(props) {
    //     this.fetchFolder(props);
    // }

    fetchFolder = (props) => {
        this.props.dispatch(FolderActions.getFolderId(props.match.params.id, props.history));
    }
    render() {
        let {folder} = this.props;
        let innerFolder = <p>... Загрузка</p>
        // if (!folder || folder.id !==this.props.match.params.id) return null;
        if (folder) {
            innerFolder = (
                <div className="innerFolder">
                <h1>{folder.id}</h1>
                <br />
                <p>{folder.content}</p>
            </div>
            )
        }
        return (
            innerFolder
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
    match: PropTypes.object,
    history: PropTypes.object
}

export default connect(mapStateToProps)(InnerFolder);