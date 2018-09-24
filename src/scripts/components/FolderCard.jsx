import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const FolderCard = ({folder}) => {
    return(
        <Link to={`/folder/${folder.id}`}>
            <Card className="Card" >                
                <CardContent className="Card__content">
                    {folder.id}
                    {folder.title}
                    {folder.content}
                </CardContent> 
                <button>Удалить</button>                    
            </Card>
        </Link>
    )    
}

FolderCard.propTypes = {
    folder: PropTypes.object
}

export default FolderCard;