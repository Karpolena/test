import axios from "axios";

import { FOLDER } from "../constants/Folder";
// import * as FolderApi from "../api/actions/Folder";



export const addFolder = (folder) => {
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

export const openInnerFolder = () => {
    return {
        type: FOLDER.OPEN_INNER_FOLDER
    }
}

export const setFolders = (folders) => {
    return {
        type: FOLDER.SET_FOLDERS,
        payload: folders
    }
}

export const getFolders = () => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/folders.json")
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
}

export const setFolderId = (folder) => {
    return {
        type: FOLDER.SET_FOLDER_ID,
        payload: folder
    }
}

export const getFolderId = (id, history) => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/folders.json")
            .then(response => {
                let folder = response.data.find(fld => fld.id.toString() === id );
                if(folder)
                dispatch(setFolderId(folder));
            })
            .catch( () => {
                // dispatch(FolderActions.fetchFolderFailed());
                history.push("/not-found")
            })
    }
}

export const fetchFolderFailed = () => {
    return {
        type: FOLDER.FETCH_FOLDER_FAILED
    }    
}

// export const getFolders = () => (dispatch) => {
//     FolderApi.getFolders()
//     .then(folders => {
//         dispatch ({
//                 type: FOLDER.SET_FOLDERS,
//                 payload: folders
//         })
//     })
// }

// export const getFolderId = (id, history) => (dispatch) => {
//     FolderApi.getFolderId(id)
//     .then (folder => {
//         dispatch ({
//             type: FOLDER.SET_FOLDER_ID,
//             payload: folder
//         })
//     })
//     .catch(() => {
//         history.push("/not-found")
//     })
// }


