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

export const getFileId = (id) => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/files.json")
        .then(response => {
            let file = response.data.find(fl => fl.id.toString() === id);
            if (file) 
                dispatch(setFileId(file));
        })
        .catch(error => {
            dispatch(fetchFileFailed())
        })
    }
}
export const getFolderId = (id) => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/folders.json")
            .then(response => {
                let folder = response.data.find(fld => fld.id.toString() === id );
                if(folder)
                dispatch(setFolderId(folder));
            })
            .catch(error => {
                dispatch(fetchFolderFailed())
            })
    }
}