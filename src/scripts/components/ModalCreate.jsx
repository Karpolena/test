import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as ModalActions from "../actions/Modal";

class ModalCreate extends Component {
    state = {
        id: "",
        title: "",
        data: "",
        content: ""
    }
    onChangeId = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    onChangeData = (event) => {
        this.setState({
            data: event.target.value
        })
    }
    onChangeContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    onCreateFolder = () => {
        const folder = {
            id: this.state.id,
            title: this.state.title,
            data: this.state.data,
            content: this.state.content
        }
        axios.post("https://test-17409.firebaseio.com/folders.json", folder)
            .then(response => console.log(response))
            .catch(error => console.log(error));
            
        this.props.dispatch(ModalActions.closeModal())
    }
    onCreateFile = () => {
        const file = {
            // id: this.state.id,
            title: this.state.title,
            data: this.state.data,
            content: this.state.content
        }
        axios.post("https://test-17409.firebaseio.com/files.json", file)
            .then(response => console.log(response))
            .catch(error => console.log(error));
            
        this.props.dispatch(ModalActions.closeModal());       
    }
   
    render() {
        return (
            <div>
                <Card className="modal create" style={{ display:  this.props.show ? "block" : "none" }}>
                    <CardContent className="modal__content">
                        {/* <input 
                            className="modal__input" 
                            type="text" 
                            placeholder="id" 
                            value={this.state.id}
                            onChange={this.onChangeId}/> */}
                        <label>Title</label>
                        <input 
                            className="modal__input" 
                            type="text" 
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.onChangeTitle}/>
                        <label>Data</label>
                        <input 
                            className="modal__input" 
                            type="text" 
                            placeholder="data"
                            value={this.state.data}
                            onChange={this.onChangeData} />
                        <label>Content</label>
                        <textarea 
                            className="modal__input" 
                            type="text" 
                            placeholder="content"
                            rows="10"
                            value={this.state.content}
                            onChange={this.onChangeContent} />                           
                        <Button onClick={this.props.folderType ? this.onCreateFolder : this.onCreateFile}>                       
                            Создать
                        </Button>
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
dispatch: PropTypes.func
}

const mapStateToProps = (state) => { 
    return {
        folderType: state.modalStore.folderType,
        fileType: state.modalStore.fileType
    }
}

export default connect(mapStateToProps)(ModalCreate);