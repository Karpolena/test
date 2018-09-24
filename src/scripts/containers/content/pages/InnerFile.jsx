import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as FileActions from "../../../actions/File";



class InnerFile extends Component {

    componentDidMount() {
        this.fetchFile(this.props)
    }
    componentWillReceiveProps(props) {
        this.fetchFile(props)
    }

    fetchFile = (props) => {
        this.props.dispatch(FileActions.getFileId(props.match.params.id));
    } 
    render() {
        let {file} = this.props;
        if (!file || file.id.toString()!== this.props.match.params.id) return null;
        return(
            <div className="innerFile">
                {file.title}
                <br />
                {file.content}
                <textarea 
                className="innerFile__textarea"
                placeholder="Введите текст"/>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        file: state.fileStore.file
    }
}

InnerFile.propTypes = {
    file: PropTypes.object,
    dispatch: PropTypes.func,
    match: PropTypes.object
}

export default connect(mapStateToProps)(InnerFile);