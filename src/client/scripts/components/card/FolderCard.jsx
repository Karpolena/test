import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";


import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FolderMenu from "../folder-popup";
import * as PopupActions from "../../actions/Popup";

const FolderCard = props => {
    return (
        <Card
            className={`Card${props.style ? " active" : " "}`}
            onClick={e => {
                e.stopPropagation();
                props.clicked(props.folder.id);
            }}
            onDoubleClick={() =>
                props.dispatch(push(`/folder/${props.folder.id}`))
            }
            onContextMenu={e => {
                props.clicked(props.folder.id);
                props.dispatch(PopupActions.open(e.currentTarget, <FolderMenu
                folder={props.folder}
            />))}}
        >
            <CardContent>
                <i className="icon fas fa-folder" />
                {props.folder.title}
            </CardContent>
        </Card>
    );
};

FolderCard.propTypes = {
    folder: PropTypes.object,
    dispatch: PropTypes.func,
    clicked: PropTypes.func,
    style: PropTypes.bool
};

export default connect(null)(FolderCard);
