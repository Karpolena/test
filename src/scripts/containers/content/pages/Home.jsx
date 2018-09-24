import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


import * as FileActions from "../../../actions/File";
import * as FolderActions from "../../../actions/Folder";
import FolderCard from "../../../components/FolderCard";
import FileCard from "../../../components/FileCard";

class Home extends Component {
    componentDidMount () {
        this.props.dispatch(FolderActions.getFolders());
        this.props.dispatch(FileActions.getFiles());
    }
    render () {
        return (
            <div className="home">
                {
                    this.props.folders.map(folder => {
                        return <FolderCard 
                            key={folder.id}
                            folder={folder}
                            onDelete={(id) => this.props.dispatch(FolderActions.removeFolder(id))}
                            />
                    })
                }
                {
                    this.props.files.map(file => {
                        return <FileCard 
                            key={file.id}
                            file={file}
                            onDelete={(id) => this.props.dispatch(FileActions.removeFile(id))}
                            />
                    })
                }
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

