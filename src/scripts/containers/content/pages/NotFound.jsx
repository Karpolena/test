import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Не найдено</h1>
            <div>
                <NavLink to="/">Вернуться на главную</NavLink>
            </div>
        </div>
    )
}

export default NotFound;