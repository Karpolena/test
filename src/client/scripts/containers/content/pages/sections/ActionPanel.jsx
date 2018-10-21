import React, { Component } from "react";
import PropTypes from "prop-types";

import * as FolderActions from "../../../../actions/Folder";
import * as FileActions from "../../../../actions/File";
import * as ModalActions from "../../../../actions/Modal";
import UpdateModal from "./../../../../components/forms/Update";
import RemoveModal from "./../../../../components/forms/Remove";

import { TYPE } from "./../../../../constants/Page";

class ActionPanelSection extends Component {

    componentDidMount() {
        //this.element.style.color = "red";
        //this.element.focus()
    }

    removeHandler = () => {
        if (!this.props.selectElement) return;
        if (this.props.selectElement.type === TYPE.FOLDER) {
            return this.props.dispatch(
                ModalActions.open(
                    <RemoveModal
                        title="Вы действительно хотите удалить папку ?"
                        onSubmit={() => {
                            this.props.dispatch(
                                FolderActions.removeFolder(
                                    this.props.selectElement.id
                                )
                            );
                        }}
                        dispatch={this.props.dispatch}
                        submitText="Отменить"
                    />
                )
            );
        }
        this.props.dispatch(
            ModalActions.open(
                <RemoveModal
                    title="Вы действительно хотите удалить файл ?"
                    onSubmit={() => {
                        this.props.dispatch(
                            FileActions.removeFile(
                                this.props.selectElement.id
                            )
                        );
                    }}
                    dispatch={this.props.dispatch}
                    submitText="Отменить"
                />
            )
        );
    };

    updateHandler = () => {
        if (!this.props.selectElement) return;
        let element = this.props.element || {
            title: "",
            descriptions: ""
        };

        if (this.props.selectElement.type === TYPE.FOLDER) {
            return this.props.dispatch(
                ModalActions.open(
                    <UpdateModal
                        title="Обновление папки"
                        element={element}
                        onSubmit={data => {
                            this.props.dispatch(
                                FolderActions.updateFolder(
                                    data,
                                    this.props.selectElement.id
                                )
                            );
                        }}
                        dispatch={this.props.dispatch}
                        submitText="Сохранить"
                    />
                )
            );
        }
        this.props.dispatch(
            ModalActions.open(
                <UpdateModal
                    title="Обновление файла"
                    element={element}
                    onSubmit={data => {
                        this.props.dispatch(
                            FileActions.updateFile(
                                data,
                                this.props.selectElement.id
                            )
                        );
                    }}
                    dispatch={this.props.dispatch}
                    submitText="Сохранить"
                />
            )
        );
    };

    renderUpdateButton = () => {
        return (
            <li title="Редактировать">
                <button className="nav-tools__btn" onClick={this.updateHandler}>
                    <i className="icon fas fa-edit" />
                </button>
            </li>
        );
    };

    renderRemoveButton = () => {
        return (
            <li title="Удалить">
                <button className="nav-tools__btn" onClick={this.removeHandler}>
                    <i className="icon fas fa-trash" />
                </button>
            </li>
        );
    };

    render() {
        let className = ["nav"];
        if (!this.props.selectElement) {
            className.push("none");
        }
        let title = "";
        if (this.props.contextElement) {
            title = this.props.contextElement.title;
        }
        return (
            <header className="header line" ref={(element) => {
                this.element = element;
            }}>
                <div className="header-left">
                    <p>Мой диск</p>
                    <p>{title}</p>
                </div>
                <nav className={className.join(" ")}>
                    <ul className="nav-tools">
                        {this.renderUpdateButton()}
                        {this.renderRemoveButton()}
                    </ul>
                </nav>
            </header>
        );
    }
}

ActionPanelSection.propTypes = {
    selectElement: PropTypes.object,
    contextElement: PropTypes.object,
    dispatch: PropTypes.func,
    element: PropTypes.object
};

export default ActionPanelSection;
