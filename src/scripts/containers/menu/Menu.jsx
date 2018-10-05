import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Modal from "../../containers/modal/Modal";
import * as ModalActions from "../../actions/Modal";

const MainMenu = (props) => {
    return(
        <aside className="aside">
        <button className="aside-btn" onClick={() => {props.dispatch(ModalActions.openModalSelect())} }>Создать</button>
        <Modal 
            show={props.showBackground} 
            hidden={() => {props.dispatch(ModalActions.closeModal())}}
            />
        <ul className="aside__list">

            <li className="aside__item">
                <i className="icon fab fa-google-drive" />
                <a href="">Мой диск</a>
            </li>

            <li className="aside__item">                
                <i className="icon fas fa-desktop" />
                <a href=""> Компьютеры</a>                
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

MainMenu.propTypes = {
    dispatch: PropTypes.func,
    showBackground: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        showBackground: state.modalStore.showBackground, 
        openSelect: state.modalStore.openSelect
    };
}

export default connect(mapStateToProps)(MainMenu);