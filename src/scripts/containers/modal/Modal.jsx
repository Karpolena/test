import React from "react";
import PropTypes from "prop-types";


import InnerModal from "../../components/InnerModal";
import BackGround from "../../components/BackGround";


const Modal = (props) => {      
    return (
        <div  >
            <BackGround 
                className="back" 
                show={props.show}
                clicked={props.hidden} />
            <InnerModal show={props.show}/>
        </div>
    );
}

Modal.propTypes = {
show: PropTypes.bool,
hidden: PropTypes.func
}


export default Modal;