import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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
    render() {
        return (
            <div>
                <Card className="modal" style={{ opacity:  this.props.show ? "1" : "0" }}>
                    <CardContent className="modal__content">
                        <input 
                            className="modal__input" 
                            type="text" 
                            placeholder="id" 
                            value={this.state.id}
                            onChange={this.onChangeId}/>
                        <input 
                            className="modal__input" 
                            type="text" 
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.onChangeTitle}/>
                        <input 
                            className="modal__input" 
                            type="text" 
                            placeholder="data"
                            value={this.state.data}
                            onChange={this.onChangeData} />
                        <textarea 
                            className="modal__input" 
                            type="text" 
                            placeholder="content"
                            value={this.state.content}
                            onChange={this.onChangeContent} />                           
                        <Button>                       
                            Создать
                        </Button>
                    </CardContent>        
                </Card>
            </div>
        )
    }
}



ModalCreate.propTypes = {
open: PropTypes.bool,
openCreate: PropTypes.bool,
show: PropTypes.bool
}

export default connect(null)(ModalCreate);