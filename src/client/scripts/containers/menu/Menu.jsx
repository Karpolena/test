import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Modal from "../../containers/modal/Modal";
import * as ModalActions from "../../actions/Modal";
import { TYPE } from "./../../constants/Page";

const MainMenu = props => {
    let className = ["aside"];
    if (props.activePageType === TYPE.FILE) {
        className.push("none");
    }

    const preventClick = (e) => {
        e.preventDefault();
    }

    return (
        <aside className={className.join(" ")}>
            <button
                className="aside-btn"
                onClick={() => {
                    props.dispatch(ModalActions.openModalSelect());
                }}
            >
                Создать
            </button>
            <Modal
                show={props.showBackground}
                hidden={() => {
                    props.dispatch(ModalActions.closeModal());
                }}
            />
            <ul className="aside__list aside__list--disabled">
                <li className="aside__item">
                    <i className="icon fab fa-google-drive" />
                    <a href="" onClick={preventClick}>Мой диск</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-desktop" />
                    <a href="" onClick={preventClick}> Компьютеры</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-users" />
                    <a href="" onClick={preventClick}>Доступные мне</a>
                </li>

                <li className="aside__item">
                    <i className="icon far fa-clock" />
                    <a href="" onClick={preventClick}>Недавние</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-star" />
                    <a href="" onClick={preventClick}>Помеченные</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-trash" />
                    <a href="" onClick={preventClick}>Корзина</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-cloud" />
                    <a href="" onClick={preventClick}>Резервные копии</a>
                </li>

                <li className="aside__item">
                    <i className="icon fas fa-cloud-download-alt" />
                    <a href="" onClick={preventClick}>Хранилище</a>
                </li>
            </ul>
        </aside>
    );
};

MainMenu.propTypes = {
    dispatch: PropTypes.func,
    showBackground: PropTypes.bool,
    activePageType: PropTypes.string
};

const mapStateToProps = state => {
    return {
        showBackground: state.modalStore.showBackground,
        openSelect: state.modalStore.openSelect,
        activePageType: state.pageStore.activePageType
    };
};

export default connect(mapStateToProps)(MainMenu);
