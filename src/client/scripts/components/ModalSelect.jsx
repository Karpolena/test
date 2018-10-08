import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as ModalActions from "../actions/Modal";

const ModalSelect = (props) => {
    
    return(
        <Card className="modal" style={{ display: props.show ? "block" : "none" }}>
            <CardContent className="modal__content">                    
                <div className="radio-wrap">
                    <div className="radio-block">
                        <i className="icon fas fa-folder" />
                        Folder
                        <input 
                            className="radio-input" 
                            type="radio" 
                            name="type" 
                            onChange={() => props.dispatch(ModalActions.setTypeFolder())}
                            checked={props.folderType}/>
                    </div>
                    <div className="radio-block">
                        <i className="icon fas fa-file" />
                        File
                        <input 
                            className="radio-input" 
                            type="radio" 
                            name="type"
                            onChange={() => props.dispatch(ModalActions.setTypeFile())}
                            checked={props.fileType} />
                    </div>
                </div>                    
                <Button onClick={() => props.dispatch(ModalActions.openModalCreate())}>                       
                    Создать
                </Button>
            </CardContent>        
        </Card>
    )
}  


ModalSelect.propTypes = {
    show: PropTypes.bool,
    dispatch: PropTypes.func,
    openSelect: PropTypes.bool,
    folderType: PropTypes.bool,
    fileType: PropTypes.bool
    }

    const mapStateToProps = (state) => { 
        return {
            folderType: state.modalStore.folderType,
            fileType: state.modalStore.fileType
        }
    }

export default connect(mapStateToProps)(ModalSelect);