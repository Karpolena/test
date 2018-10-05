import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const FileCard = ({file, onDelete}) => {
    return(
        <Card className="Card file" >
            <Link to={`/file/${file.id}`}>
                <CardContent className="Card__content">
                    <i className="icon fas fa-file" />
                    <div className="file__title">
                        {file.title}
                    </div>
                </CardContent>             
            </Link> 
            {/* <Button onClick={() => onDelete(file.id)}>Удалить</Button>       */}
        </Card>
    )    
}

FileCard.propTypes = {
    file: PropTypes.object,
    onDelete: PropTypes.func
}

export default FileCard;