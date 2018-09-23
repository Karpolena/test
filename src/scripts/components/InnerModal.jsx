import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const ModalCard = () => {
    return(
        <Card className="modal" >
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
                <button>                       
                    Создать
                </button>
            </CardContent>        
        </Card>
    )
}

export default ModalCard;