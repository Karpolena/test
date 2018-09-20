import { FOLDER } from "../../constants/Folder";


export const setFolders = (folders) => {
    return {
        type: FOLDER.SET_FOLDERS,
        payload: folders
    }
}

export const setFolderId = (folder) => {
    return {
        type: FOLDER.SET_FOLDER_ID,
        payload: folder
    }
}

export const fetchFolderFailed = () => {
    return {
        type: FOLDER.FETCH_FOLDER_FAILED
    }    
}

export const getFolders = () => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/folders.json")
            .then(response => {
                dispatch(setFolders(response.data));
            })
            .catch(error => {
                dispatch(fetchFolderFailed())
            })
    }
}