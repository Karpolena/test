import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Form from "../../components/Create";
// import ModalSelect from "../../components/ModalSelect";
// import ModalCreate from "../../components/ModalCreate";
import Select from "../../components/Select";
import Create from "../../components/Create";
import BackGround from "../../components/BackGround";


const Modal = (props) => {
    // let modal = <ModalSelect show={props.openSelect}/>
    // if (props.openCreate) {
    //     modal = <ModalCreate show={props.openCreate}/>
    // }
    let modal = <Select show={props.openSelect}/>
    if (props.openCreate) {
        modal = <Create show={props.openCreate}/>
    }
    return (
        <div>
            <BackGround 
                className="back" 
                show={props.show}
                clicked={props.hidden}
            /> 
                <Card
                    className="modal "
                    style={{ display: props.show ? "block" : "none" }}
                >
                    <CardContent>
                        {modal} 
                    </CardContent>
                </Card>             
            
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