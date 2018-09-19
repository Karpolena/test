import React from "react";


import Back from "../../components/Back";
import ModalCard from "../../components/ModalCard";

const Modal = () => {      
    return (
        <div  >
            <Back show className="back">            
                <ModalCard />
            </Back>
        </div>
    );
}


export default Modal;