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
                    this.props.folderStore.map(folder => {
                        return <FolderCard 
                            key={folder.id}
                            folder={folder}
                            />
                    })
                }
                {
                    this.props.fileStore.map(file => {
                        return <FileCard 
                            key={file.id}
                            file={file}
                            />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        folderStore: state.folderStore.folders,
        fileStore: state.fileStore.files
    }
}

Home.propTypes = {
    dispatch: PropTypes.func,
    folderStore: PropTypes.array,
    fileStore: PropTypes.array
}
export default connect(mapStateToProps)(Home);

