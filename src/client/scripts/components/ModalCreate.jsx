import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as ModalActions from "../actions/Modal";
import * as FileActions from "../actions/File";
import * as FolderActions from "../actions/Folder";

class ModalCreate extends Component {
    state = {
        title: "",
        content: "",
        descriptions: ""
    }
    
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    onCreateFolder = () => {
        axios.post("api/create-folder", {title: this.state.title, descriptions: this.state.descriptions, context: this.props.context})
        .then((response) => {
            this.props.dispatch(FolderActions.createFolder(response.data)) 
            console.log(response.data)         
        })
        .catch(error => console.log(error));
            console.log(this.props.context)            
            this.props.dispatch(ModalActions.closeModal())
    }

    onCreateFile = () => {
        axios.post("api/create-file", {title: this.state.title, descriptions: this.state.descriptions, content: this.state.content, context: this.props.context})
        .then((response) => {
            this.props.dispatch(FileActions.createFile(response.data)) 
            console.log(response.data)         
        })
        .catch(error => console.log(error));
            console.log(this.props.context)            
            this.props.dispatch(ModalActions.closeModal())  
    }
    
    renderContentField = () => {
        let { folderType } = this.props;
        if (!folderType) {
            return (
                <div className="modal__textarea">
                    <label>Content</label>
                    <textarea 
                        className="modal__input" 
                        type="text" 
                        name="content"
                        placeholder="content"
                        rows="10"
                        value={this.state.content}
                        onChange={this.handleInputChange} />
                </div>
            )
        } 
    }
    render() {
        return (
            <div>
                <Card className="modal create" style={{ display:  this.props.show ? "block" : "none" }}>
                    <CardContent >
                        <form className="modal__form" >                       
                            <label>Title</label>
                            <input 
                                className="modal__input" 
                                type="text"
                                name="title" 
                                placeholder="title"
                                value={this.state.title}
                                onChange={this.handleInputChange}/>
                            <label>Descriptions</label>
                            <input 
                                className="modal__input" 
                                type="text"
                                name="descriptions" 
                                placeholder="descriptions"
                                value={this.state.descriptions}
                                onChange={this.handleInputChange}/>
                            {this.renderContentField()}
                            <Button type="submit" onClick={this.props.folderType ? this.onCreateFolder : this.onCreateFile}> 
                                Создать
                            </Button>
                        </form>
                    </CardContent>        
                </Card>
            </div>
        )
    }
}



ModalCreate.propTypes = {
openCreate: PropTypes.bool,
show: PropTypes.bool,
folderType: PropTypes.bool,
dispatch: PropTypes.func,
context: PropTypes.string 
}

const mapStateToProps = (state) => { 
    return {
        folderType: state.modalStore.folderType,
        fileType: state.modalStore.fileType,
        context: state.pageStore.context
    }
}

export default connect(mapStateToProps)(ModalCreate);