import { FILE } from "../constants/File";
import * as FileApi from "../api/actions/File";

export const addFile = (file) => {
    return {
        type: FILE.ADD_FILE,
        payload: file
    }
}

export const removeFile = (id) => {
    return {
        type: FILE.REMOVE_FILE,
        payload: id
    }
}

export const openInnerFile = () => {
    return {
        type: FILE.OPEN_INNER_FILE
    }
}

// export const setFiles = (files) => {
//     return {
//         type: FILE.SET_FILES,
//         payload: files
//     }
// }

// export const setFileId = (file) => {
//     return {
//         type: FILE.SET_FILE_ID,
//         payload: file
//     }
// }

export const fetchFileFailed = () => {
    return {
        type: FILE.FETCH_FILE_FAILED
    }    
}

export const getFiles = () => (dispatch) => {
    FileApi.getFiles()
    .then(files => {
        dispatch ({
            type: FILE.SET_FILES,
            payload: files
        })
    })
}

export const getFileId = (id, history) => (dispatch) => {
    FileApi.getFileId(id)
    .then (file => {
        dispatch ({
            type: FILE.SET_FILE_ID,
            payload: file
        })
    })
    .catch(() => {
        history.push("/not-found")
    })
}

