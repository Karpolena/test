import React from "react";
import PropTypes from "prop-types";


const Back = (props) => {
    return (
       props.show 
        ? 
        <div className="back" onClick={props.clicked}>
            {props.children}
        </div>
        : 
        null
    )
    

}

Back.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func,
    children: PropTypes.node
}

export default Back;
