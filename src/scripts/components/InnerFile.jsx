import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const InnerFile = ({file}) => {
    return(
<Card className="Card" >
        <CardContent className="Card__content">
            {file.title}
            {folder.id}
            {folder.content}
        </CardContent>
        <button>Удалить</button>        
    </Card>
    )
    
}

export default InnerFile;