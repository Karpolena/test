import React from "react";
import PropTypes from "prop-types";


const BackGround = (props) => {
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

BackGround.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func,
    children: PropTypes.node
}

export default BackGround;
