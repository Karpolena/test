import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const FileCard = ({file}) => {
    return(
<Card className="Card" >
        <CardContent className="Card__content">
            {file.title}
            {file.id}
            {file.content}
        </CardContent>
        <button>Удалить</button>        
    </Card>
    )
    
}

FileCard.propTypes = {
    file: PropTypes.object
}

export default FileCard;