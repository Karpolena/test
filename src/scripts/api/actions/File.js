import { FILE } from "../../constants/File";


export const setFiles = (files) => {
    return {
        type: FILE.SET_FILES,
        payload: files
    }
}

export const setFileId = (file) => {
    return {
        type: FILE.SET_FILE_ID,
        payload: file
    }
}

export const fetchFileFailed = () => {
    return {
        type: FILE.FETCH_FILE_FAILED
    }    
}

export const getFiles = () => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/files.json")
            .then(response => {
                dispatch(setFiles(response.data));
            })
            .catch(error => {
                dispatch(fetchFileFailed())
            })
    }
}