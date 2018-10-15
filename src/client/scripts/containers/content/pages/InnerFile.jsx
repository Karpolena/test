import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* import * as FileActions from "../../../actions/File"; */
import * as ActiveActions from "./../../../actions/Active";
import * as PageActions from "./../../../actions/Page";
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
    }

    handleInputContent = e => {
        this.setState ({
            content: e.target.value
        })
    }

    render() {
        let { file } = this.props;
        let innerFile = <p>... Загрузка</p>;
        // if (!file || file.id !==this.props.match.params.id) return null;
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
                                    <button className="nav-tools__btn">
                                        <i className="icon fas fa-save" />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </header>                  
                    <form className="form textarea" onSubmit={this.onSubmit}>
                        <label>Content</label>
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

const mapStateToProps = ({fileStore}) => {
    return {
        file: fileStore.file
    };
};

InnerFile.propTypes = {
    file: PropTypes.object,
    dispatch: PropTypes.func,
    match: PropTypes.object,
    history: PropTypes.object
};

export default connect(mapStateToProps)(InnerFile);
