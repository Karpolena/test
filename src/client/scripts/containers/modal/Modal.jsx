import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


import ModalSelect from "../../components/ModalSelect";
import ModalCreate from "../../components/ModalCreate";
import BackGround from "../../components/BackGround";


const Modal = (props) => {
    let modal = <ModalSelect show={props.openSelect}/>
    if (props.openCreate) {
        modal = <ModalCreate show={props.openCreate}/>
    }
    return (
        <div>
            <BackGround 
                className="back" 
                show={props.show}
                clicked={props.hidden} />  
                {modal}              
            {/* <ModalSelect show={props.openSelect}/> */}
            {/* <ModalCreate show={props.openCreate}/> */}
        </div>
    );
}

Modal.propTypes = {
show: PropTypes.bool,
hidden: PropTypes.func,
openSelect: PropTypes.bool,
openCreate: PropTypes.bool
}
const mapStateToProps = state => {
    return {
        openSelect: state.modalStore.openSelect,
        openCreate: state.modalStore.openCreate

    }
}


export default connect(mapStateToProps)(Modal);