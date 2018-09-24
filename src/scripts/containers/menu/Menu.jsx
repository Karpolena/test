import React, { Component } from "react";
// import PropTypes from "prop-types";

import Modal from "../../containers/modal/Modal";

class MainMenu extends Component {
    state = {
        showBackGround: false
    }
    showBackGroundHandler = () => {
        this.setState({
            showBackGround: true
        });
    }
    hiddenBackGroundHandnler = () => {
        this.setState({
            showBackGround: false
        })
    }
    render() {
        return(
            <aside className="aside">
            <button className="aside-btn" onClick={this.showBackGroundHandler}>Создать</button>
            <Modal 
                show={this.state.showBackGround} 
                hidden={this.hiddenBackGroundHandnler}/>
            <ul className="aside__list">

                <li className="aside__item">                
                    <a href="">
                        <i className="icon fab fa-google-drive" />
                        Мой диск
                    </a>
                </li>

                <li className="aside__item">
                    <a href="">
                    <i className="icon fas fa-desktop" />
                        Компьютеры
                    </a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-users" />
                    <a href="">Доступные мне</a>
                </li>

                <li className="aside__item">
                    <i className="icon far fa-clock" />
                    <a href="">Недавние</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-star" />
                    <a href="">Помеченные</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-trash" />
                    <a href="">Корзина</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-cloud" />
                    <a href="">Резервные копии</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-cloud-download-alt" />
                    <a href="">Хранилище</a>
                </li>

            </ul>
        </aside>
        )
    }
}

// MainMenu.propTypes = {

// }

export default MainMenu;