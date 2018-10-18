import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* import * as FileActions from "../../../actions/File"; */
import * as ActiveActions from "./../../../actions/Active";
import * as PageActions from "./../../../actions/Page";
import * as FileActions from "./../../../actions/File";
import { TYPE } from "./../../../constants/Page";

class InnerFile extends Component {
    state = {
        content: ""
    };
    componentDidMount() {
        let { match, dispatch } = this.props;
        dispatch(ActiveActions.removeActive());
        dispatch(
            PageActions.getPage({ type: TYPE.FILE, context: match.params.id })
        );
    }

    componentWillReceiveProps(props) {
        let { match, dispatch } = props;
        if (this.props.match.params.id !== match.params.id) {
            dispatch(ActiveActions.removeActive());
            dispatch(
                PageActions.getPage({
                    type: TYPE.FILE,
                    context: match.params.id
                })
            );
        }

        if (!this.props.file && props.file) {
            this.setState({ content: props.file.content });
        }
    }

    handleInputContent = e => {
        this.setState({
            content: e.target.value
        });
    };

    onSaveFile = () => {
        let { dispatch } = this.props;
        dispatch( FileActions.updateFile(
            { content: this.state.content },
            this.props.activeFile
            )
        )
    };

    render() {
        let { file } = this.props;
        let innerFile = <p>... Загрузка</p>;
        if (file) {
            innerFile = (
                <div className="inner">
                    <header className="header line">
                        <div className="header-left">
                            <p>Мой диск</p>
                            <p>{this.props.file.title}</p>
                        </div>
                        <nav className="nav">
                            <ul className="nav-tools">
                                <li title="Редактировать">
                                    <button 
                                        className="nav-tools__btn" 
                                        type="submit" 
                                        onClick={this.onSaveFile}
                                    >
                                            <i className="icon fas fa-save" />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <form className="form textarea" onSubmit={this.onSubmit}>
                        <textarea
                            className="form__input "
                            type="text"
                            name="content"
                            placeholder="content"
                            rows="10"
                            value={this.state.content}
                            onChange={this.handleInputContent}
                        />
                    </form>
                </div>
            );
        }
        return innerFile;
    }
}

const mapStateToProps = ({ fileStore, activeStore }) => {
    return {
        file: fileStore.file,
        activeFile: activeStore.activeFile
    };
};

InnerFile.propTypes = {
    file: PropTypes.object,
    dispatch: PropTypes.func,
    match: PropTypes.object,
    history: PropTypes.object,
    activeFile: PropTypes.string,
    updateFile: PropTypes.func,
};

export default connect(mapStateToProps)(InnerFile);
