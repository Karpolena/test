import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as FileActions from "../../../actions/File";




class InnerFile extends Component {

    componentDidMount() {
        this.fetchFile(this.props)
    }
    // componentWillReceiveProps(props) {
    //     this.fetchFile(props)
    // }

    fetchFile = (props) => {
        this.props.dispatch(FileActions.getFileId(props.match.params.id, props.history));
    } 
   
    render() {
        let {file} = this.props;
        let innerFile = <p>... Загрузка</p>
        // if (!file || file.id !==this.props.match.params.id) return null;
        if (file) {            
            innerFile = (
                <div className="inner">
                    <header className="header">
                        
                    </header>
                    <h1>{file.title}</h1>
                    <br />
                    <p>{file.content}</p>                
            </div>
            )
        }
        return (
            innerFile
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
    match: PropTypes.object,
    history: PropTypes.object
}

export default connect(mapStateToProps)(InnerFile);