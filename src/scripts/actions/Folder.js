import { FOLDER } from "../constants/Folder";
import * as FolderApi from "../api/actions/Folder";

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

// export const setFolders = (folders) => {
//     return {
//         type: FOLDER.SET_FOLDERS,
//         payload: folders
//     }
// }

// export const setFolderId = (folder) => {
//     return {
//         type: FOLDER.SET_FOLDER_ID,
//         payload: folder
//     }
// }

export const fetchFolderFailed = () => {
    return {
        type: FOLDER.FETCH_FOLDER_FAILED
    }    
}

export const getFolders = () => (dispatch) => {
    FolderApi.getFolders()
    .then(folders => {
        dispatch ({
                type: FOLDER.SET_FOLDERS,
                payload: folders
        })
    })
}

export const getFolderId = (id, history) => (dispatch) => {
    FolderApi.getFolderId(id)
    .then (folder => {
        dispatch ({
            type: FOLDER.SET_FOLDER_ID,
            payload: folder
        })
    })
    .catch(() => {
        history.push("/not-found")
    })
}


