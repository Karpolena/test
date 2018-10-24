import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FileMenu from "../file-popup";
import * as PopupActions from "../../actions/Popup";

const FileCard = props => {
    return (
        <Card
            className={`Card file${props.style ? " active" : " "}`}
            onClick={e => {
                e.stopPropagation();
                props.clicked(props.file.id);
            }}
            onDoubleClick={() => props.dispatch(push(`/file/${props.file.id}`))}
            onContextMenu={e => {
                e.preventDefault();
                e.stopPropagation();
                props.dispatch(
                    PopupActions.open(
                        e.currentTarget,
                        <FileMenu file={props.file} />
                    )
                );
            }}
        >
            <CardContent className="Card__content">
                <i className="icon fas fa-file" />
                <div className="file__title">{props.file.title}</div>
            </CardContent>
        </Card>
    );
};

FileCard.propTypes = {
    file: PropTypes.object,
    dispatch: PropTypes.func,
    clicked: PropTypes.func,
    style: PropTypes.bool
};

export default connect(null)(FileCard);
