import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as ModalActions from "../actions/Modal";

const ModalSelect = ({dispatch, show}) => {
    return(
        <Card className="modal" style={{ opacity: show ? "1" : "0" }}>
            <CardContent className="modal__content">                    
                <div className="radio-wrap">
                    <div className="radio-block">
                        <i className="icon fas fa-folder" />
                        Folder
                        <input 
                            className="radio-input" 
                            type="radio" 
                            name="type" 
                            onChange={() => dispatch(ModalActions.setTypeFolder())}/>
                    </div>
                    <div className="radio-block">
                        <i className="icon fas fa-file" />
                        File
                        <input 
                            className="radio-input" 
                            type="radio" 
                            name="type"
                            onChange={() => dispatch(ModalActions.setTypeFile())} />
                    </div>
                </div>                    
                <Button onClick={() => dispatch(ModalActions.openModalCreate())}>                       
                    Создать
                </Button>
            </CardContent>        
        </Card>
    )
}  


ModalSelect.propTypes = {
    show: PropTypes.bool,
    dispatch: PropTypes.func,
    openSelect: PropTypes.bool
    }

export default connect(null)(ModalSelect);