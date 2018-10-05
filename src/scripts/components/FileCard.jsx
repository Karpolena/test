import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";


import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";

const FileCard = (props) => {
    return(
        <Card 
            className="Card file"
            onClick={props.clicked}
            onDoubleClick={() => props.dispatch(push(`/file/${props.file.id}`))}
             >
            {/* <Link to={`/file/${props.file.id}`}> */}
                <CardContent className="Card__content">
                    <i className="icon fas fa-file" />
                    <div className="file__title">
                        {props.file.title}
                    </div>
                </CardContent>             
            {/* </Link>  */}
            {/* <Button onClick={() => props.onDelete(file.id)}>Удалить</Button>       */}
        </Card>
    )    
}

FileCard.propTypes = {
    file: PropTypes.object,
    onDelete: PropTypes.func,
    dispatch: PropTypes.func,
    clicked: PropTypes.func
}

export default connect(null)(FileCard);