import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const FolderCard = ({folder}) => {
    return(
<Card className="Card" >
        <CardContent className="Card__content">
            {folder.id}
            {folder.title}
            {folder.content}
        </CardContent> 
        <button>Удалить</button>       
    </Card>
    )    
}

FolderCard.propTypes = {
    folder: PropTypes.object
}

export default FolderCard;