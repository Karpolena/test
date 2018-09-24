import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const FileCard = ({file, onDelete}) => {
    return(
        <Card className="Card" >
            <Link to={`/file/${file.id}`}>
                <CardContent className="Card__content">
                    {file.title}
                    {file.id}
                    {file.content}
                </CardContent>             
            </Link> 
            <Button onClick={() => onDelete(file.id)}>Удалить</Button>      
        </Card>
    )
    
}

FileCard.propTypes = {
    file: PropTypes.object
}

export default FileCard;