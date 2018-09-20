import React from "react";


import Back from "../../components/Back";
import InnerModal from "../../components/InnerModal";

const Modal = () => {      
    return (
        <div  >
            <Back show className="back">            
                <InnerModal />
            </Back>
        </div>
    );
}


export default Modal;