import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
// import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";

const FolderCard = (props) => {
    return(
        <Card
         className="Card"
         onClick={() => props.clicked(props.folder.id)}
         onDoubleClick={() => props.dispatch(push(`/folder/${props.folder.id}`))}>
            {/* <Link to={`/folder/${props.folder.id}`}>                 */}
                <CardContent >
                    <i className="icon fas fa-folder" />
                    {/* {folder.id} */}
                    {props.folder.title}
                    <br />
                    {/* {folder.content}
                    <br /> */}
                </CardContent> 
            {/* </Link> */}
            {/* <Button onClick={() => onDelete(props.folder.id)}>Удалить</Button>                     */}
        </Card>
    )    
}

FolderCard.propTypes = {
    folder: PropTypes.object,
    onDelete: PropTypes.func,
    dispatch: PropTypes.func,
    clicked: PropTypes.func
}

export default connect(null)(FolderCard);