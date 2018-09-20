import { FOLDER } from "../constants/Folder";

let initialState = {
    folders: [],
    folder: [],
    isOpenInnerFolder: false,
    error: false
}

const setFolders = (payload) => {
    return {
        ...state,
        folders: payload,
        error: false
    }
}

const setFolderId = (payload) => {
    return {
        ...state,
        folder: payload,
        error: false
    }
}


const removeFolder = (payload) => {
    return {
        ...state,
        folders: state.folders.filter(fld => fld.id !== payload)
    }
}

const openInnerFolder = () => {
    return {
        ...state, 
        isOpenInnerFolder: true
    }
}

const fetchFolderFailed = () => {
    return {
        ...state,
        error: true
    }
}

const folderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLDER.SET_FOLDERS:
            return setFolders(state, action.payload);
        case FOLDER.SET_FOLDER_ID:
            return setFolderId(state, action.payload);
        case FOLDER.REMOVE_FOLDER:
            return removeFolder(state, action.payload);
        case FOLDER.OPEN_INNER_FOLDER:
            return openInnerFolder(state);
        case FOLDER.FETCH_FOLDER_FAILED:
            return fetchFolderFailed(state);
        default:
            return state;
    }
}

export default folderReducer;