import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const InnerFolder = ({folder}) => {
    return(
<Card className="Card" >
        <CardContent className="Card__content">
            {folder.id}
            {folder.title}
            {folder.content}
        </CardContent> 
        <button>Удалить</button>       
    </Card>
    )
    
}

export default InnerFolder;