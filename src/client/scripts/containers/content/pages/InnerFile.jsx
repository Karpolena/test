import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* import * as FileActions from "../../../actions/File"; */
import * as ActiveActions from "./../../../actions/Active";
import * as PageActions from "./../../../actions/Page";
import { TYPE } from "./../../../constants/Page";

class InnerFile extends Component {

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

    render() {
        let { file } = this.props;
        let innerFile = <p>... Загрузка</p>;
        // if (!file || file.id !==this.props.match.params.id) return null;
        if (file) {
            innerFile = (
                <div className="inner">
                    {/* <header className="header">
                        
                    </header> */}
                    <h1>{file.title}</h1>
                    <br />
                    <p>{file.content}</p>
                </div>
            );
        }
        return innerFile;
    }
}

const mapStateToProps = state => {
    return {
        file: state.fileStore.file
    };
};

InnerFile.propTypes = {
    file: PropTypes.object,
    dispatch: PropTypes.func,
    match: PropTypes.object,
    history: PropTypes.object
};

export default connect(mapStateToProps)(InnerFile);
