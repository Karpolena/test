import React from "react";
// import PropTypes from "prop-types";

import Modal from "../../containers/modal/Modal";



const MainMenu = () => {
    return (
        <aside className="aside">
            <button className="aside-btn">Создать</button>
            <Modal />
            <ul className="aside__list">

                <li className="aside__item">                
                    <a href="">
                        <i className="icon fab fa-google-drive"></i>
                        Мой диск
                    </a>
                </li>

                <li className="aside__item">
                    <a href="">
                    <i className="icon fas fa-desktop"></i>
                        Компьютеры
                    </a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-users"></i>
                    <a href="">Доступные мне</a>
                </li>

                <li className="aside__item">
                    <i className="icon far fa-clock"></i>
                    <a href="">Недавние</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-star"></i>
                    <a href="">Помеченные</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-trash"></i>
                    <a href="">Корзина</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-cloud"></i>
                    <a href="">Резервные копии</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-cloud-download-alt"></i>
                    <a href="">Хранилище</a>
                </li>

            </ul>
        </aside>        
    );
}

// MainMenu.propTypes = {

// }

export default MainMenu;