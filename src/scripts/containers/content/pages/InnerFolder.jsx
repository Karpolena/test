import React from "react";
import PropTypes from "prop-types";


const InnerFolder = ({folder}) => {
    return(
        <div className="innerFolder">
            {folder.title}
            {folder.content}
        </div>            
    )    
}

InnerFolder.propTypes = {
    folder: PropTypes.object
}

export default InnerFolder;