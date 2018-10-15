// import React, {Component} from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";


// import * as FileActions from "../../../actions/File";
// import * as FolderActions from "../../../actions/Folder";
// import * as ActiveActions from "../../../actions/Active";
// import FolderCard from "../../../components/FolderCard";
// import FileCard from "../../../components/FileCard";

// class Home extends Component {
//     componentDidMount () {
//         /* this.props.dispatch(FolderActions.getFolders());
//         this.props.dispatch(FileActions.getFiles());
//         this.props.dispatch(ActiveActions.removeActive()); */
//     }
    
//     render () {
//         return (
//             <div className="home">
//             <header className="header line">
//             <p>Мой диск</p>
//                 <nav className={`nav${this.props.activeFile ||this.props.activeFolder ? " " : " none"}`}> 
//                     <ul className="nav-tools">
//                         <li title="Редактировать">
//                             <button className="nav-tools__btn">
//                                 <i className="icon fas fa-edit"/>
//                             </button>
//                         </li>
//                         <li title="Удалить">
//                             <button 
//                             className="nav-tools__btn"
//                             onClick={
//                                     this.props. activeFolder 
//                                     ? 
//                                     () =>  this.props.dispatch(FolderActions.deleteFolderId(this.props.activeFolder))
//                                     :
//                                     () =>  this.props.dispatch(FileActions.deleteFileId(this.props.activeFile))
//                                 }
//                             >
//                                 <i className="icon fas fa-trash"/>
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>
//             </header>
//                 <h5>Папки</h5>
//                 <div key="1">                
//                     {
//                         this.props.folders.map(folder => {
//                             return <FolderCard 
//                                 key={folder.id}
//                                 folder={folder}
//                                 clicked={(id) => this.props.dispatch(ActiveActions.setActiveFolder(id))}
//                                 style={this.props.activeFolder === folder.id}
//                                 />
//                         })
//                     }
//                 </div>
//                 <h5>Файлы</h5>
//                 <div key="2">
//                     {
//                         this.props.files.map(file => {
//                             return <FileCard 
//                                 key={file.id}
//                                 file={file}
//                                 clicked={(id) => this.props.dispatch(ActiveActions.setActiveFile(id))}
//                                 style={this.props.activeFile === file.id}
//                                 />
//                         })
//                     }
//                 </div>                
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         folders: state.folderStore.folders,
//         folder: state.folderStore.folder,
//         files: state.fileStore.files,
//         activeFile: state.activeStore.activeFile,
//         activeFolder: state.activeStore.activeFolder
//     }
// }

// Home.propTypes = {
//     dispatch: PropTypes.func,
//     folders: PropTypes.array,
//     files: PropTypes.array,
//     activeFolder: PropTypes.string,
//     activeFile: PropTypes.array
// }
// export default connect(mapStateToProps)(Home);

