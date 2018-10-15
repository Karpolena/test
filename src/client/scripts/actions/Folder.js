import { FOLDER } from "../constants/Folder";

export const createFolder = (folder) => {
    return {
        type: FOLDER.CREATE_FOLDER,
        payload: folder
    }
}



/* import axios from "axios";

import { FOLDER } from "../constants/Folder"; */
// import * as FolderApi from "../api/actions/Folder";



/* export const addFolder = (folder) => {
    return {
        type: FOLDER.ADD_FOLDER,
        payload: folder
    }
}

export const removeFolder = (id) => {
    return {
        type: FOLDER.REMOVE_FOLDER,
        payload: id
    }
}

export const deleteFolderId = (id) => {
    return dispatch => {
        axios.delete("https://test-17409.firebaseio.com/folders/" + id +".json")
        .then(() => {
            dispatch(removeFolder(id));
        })
    }
} */

/* export const openInnerFolder = () => {
    return {
        type: FOLDER.OPEN_INNER_FOLDER
    }
}

export const setFolders = (folders) => {
    return {
        type: FOLDER.SET_FOLDERS,
        payload: folders
    }
} */

// export const getFolders = () => {
//     return dispatch => {
//         axios.get("https://test-17409.firebaseio.com/folders.json")
//             .then(response => {
//                 const getedFolders = [];
//                 for (let key in response.data) {
//                     getedFolders.push({
//                         ...response.data[key],
//                         id: key
//                     })
//                 }
//                 dispatch(setFolders(getedFolders));
//             })
//             // .catch(error => {
//             //     dispatch(FolderActions.fetchFolderFailed())
//             // })
//     }
// }

/* export const getFolders = () => {
    return dispatch => {
        axios.post("api/get-page", {type: "folder"})
            .then(response => {
                const getedFolders = [];
                for (let key in response.data) {
                    getedFolders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                dispatch(setFolders(getedFolders));
            })
            // .catch(error => {
            //     dispatch(FolderActions.fetchFolderFailed())
            // })
    }
} */

/* export const setFolderId = (folder) => {
    return {
        type: FOLDER.SET_FOLDER_ID,
        payload: folder
    }
}

export const getFolderId = (id) => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/folders/" + id +".json")
            .then(response => {                
                dispatch(setFolderId(response.data));
            })
            .catch(() => {
                // dispatch(FileActions.fetchFileFailed());
                history.push("/not-found")
            })
    }
} */

// export const setActiveFolder = (id) => {
//     return {
//         type: FOLDER.SET_ACTIVE_FOLDER,
//         payload: id
//     }
// }

// export const fetchFolderFailed = () => {
//     return {
//         type: FOLDER.FETCH_FOLDER_FAILED
//     }    
// }











