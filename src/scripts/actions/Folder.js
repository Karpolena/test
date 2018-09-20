import { FOLDER } from "../constants/Folder";

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

export const setFolderId = (folder) => {
    return {
        type: FOLDER.SET_FOLDER_ID,
        payload: folder
    }
}