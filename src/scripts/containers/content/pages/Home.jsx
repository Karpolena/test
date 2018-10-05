import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


import * as FileActions from "../../../actions/File";
import * as FolderActions from "../../../actions/Folder";
import FolderCard from "../../../components/FolderCard";
import FileCard from "../../../components/FileCard";

class Home extends Component {
    state = {
        showNavButton: false 
    }
    showNavHandler = () => {
        this.setState({
            showNavButton: true
        })
    }
    componentDidMount () {
        this.props.dispatch(FolderActions.getFolders());
        this.props.dispatch(FileActions.getFiles());
    }
    render () {
        return (
            <div className="home">
            <header className="header line">
            <p>Мой диск</p>
                <nav className="nav" style={{ display: this.state.showNavButton ? "block" : "none" }}>
                    <ul className="nav-tools">
                        <li title="Редактировать">
                            <button className="nav-tools__btn">
                                <i className="icon fas fa-edit"/>
                            </button>
                        </li>
                        <li title="Удалить">
                            <button className="nav-tools__btn">
                                <i className="icon fas fa-trash"/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
                <h5>Папки</h5>
                <div key="1">                
                    {
                        this.props.folders.map(folder => {
                            return <FolderCard 
                                key={folder.id}
                                folder={folder}
                                onDelete={(id) => this.props.dispatch(FolderActions.deleteFolderId(id))}
                                clicked={this.showNavHandler}
                                />
                        })
                    }
                </div>
                <h5>Файлы</h5>
                <div key="2">
                    {
                        this.props.files.map(file => {
                            return <FileCard 
                                key={file.id}
                                file={file}
                                clicked={this.showNavHandler}
                                onDelete={(id) => this.props.dispatch(FileActions.deleteFileId(id))}
                                />
                        })
                    }
                </div>                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        folders: state.folderStore.folders,
        files: state.fileStore.files
    }
}

Home.propTypes = {
    dispatch: PropTypes.func,
    folders: PropTypes.array,
    files: PropTypes.array
}
export default connect(mapStateToProps)(Home);

