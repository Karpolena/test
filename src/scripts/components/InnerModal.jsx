import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const ModalCard = (props) => {
    return(
        <Card className="modal" style={{ opacity: props.show ? "1" : "0" }}>
            <CardContent className="modal__content">
                <input className="modal__input" type="text" placeholder="Введите название" />
                <div className="radio-wrap">
                    <div className="radio-block">
                        <i className="icon fas fa-folder" />
                        Folder
                        <input className="radio-input" type="radio" name="type" />
                    </div>
                    <div className="radio-block">
                        <i className="icon fas fa-file" />
                        File
                        <input className="radio-input" type="radio" name="type" />
                    </div>
                </div>                    
                <Button>                       
                    Создать
                </Button>
            </CardContent>        
        </Card>
    )
}

ModalCard.propTypes = {
    show: PropTypes.bool
    }

export default ModalCard;