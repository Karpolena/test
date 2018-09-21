import React from "react";
import PropTypes from "prop-types";


const InnerFile = ({file}) => {
    return(
        <div className="innerFile">
            {file.title}
            {file.content}
        </div>            
    )    
}

InnerFile.propTypes = {
    file: PropTypes.object
}

export default InnerFile;