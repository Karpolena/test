// import axios from "axios";


// import { FOLDER } from "../../constants/Folder";

// import FolderActions from "../../actions/Folder";


// export const getFolders = () => {
//     return dispatch => {
//         axios.get("https://test-17409.firebaseio.com/folders.json")
//             .then(response => {
//                 dispatch(FolderActions.setFolders(response.data));
//             })
            // .catch(error => {
            //     dispatch(FolderActions.fetchFolderFailed())
            // })
//     }
// }
// export const getFolderId = (id, history) => {
//     return dispatch => {
//         axios.get("https://test-17409.firebaseio.com/folders.json")
//             .then(response => {
//                 let folder = response.data.find(fld => fld.id.toString() === id );
//                 if(folder)
//                 dispatch(FolderActions.setFolderId(folder));
//             })
//             .catch( () => {
//                 // dispatch(FolderActions.fetchFolderFailed());
//                 history.push("/not-found")
//             })
//     }
// }

// import {data} from "../data/folderData";

// export const getFolders = () => {
//      return new Promise((resolve) => {
//          resolve(data);
//      });
//  }

// export const getFolderId = (id) => {
//     return new Promise((resolve, reject) => {
//          let folder = data.find(fld => fld.id.toString() === id);
//          if(folder) return resolve(folder);
//          reject("Folder not found");
//      });
// }


