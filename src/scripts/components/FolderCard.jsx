import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const FolderCard = ({folder, onDelete}) => {
    return(
        <Card className="Card" >
            <Link to={`/folder/${folder.id}`}>                
                <CardContent className="Card__content">
                    {folder.id}
                    {folder.title}
                    {folder.content}
                </CardContent> 
            </Link>
            <Button onClick={() => onDelete(folder.id)}>Удалить</Button>                    
        </Card>
    )    
}

FolderCard.propTypes = {
    folder: PropTypes.object
}

export default FolderCard;