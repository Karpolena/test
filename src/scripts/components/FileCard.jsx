import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const FileCard = ({file}) => {
    return(
        <Link to={`/file/${file.id}`}>
            <Card className="Card" >
                <CardContent className="Card__content">
                    {file.title}
                    {file.id}
                    {file.content}
                </CardContent>
                <button>Удалить</button>        
            </Card>
        </Link>
    )
    
}

FileCard.propTypes = {
    file: PropTypes.object
}

export default FileCard;