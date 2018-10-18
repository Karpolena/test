import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


import Button from "@material-ui/core/Button";
import * as ModalActions from "../actions/Modal";

const Select = (props) => {
    
    return( 
        <form className="form__radio">   
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
        </form>
    )
}  


Select.propTypes = {
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

export default connect(mapStateToProps)(Select);