
import axios from "axios";


import { FILE } from "../constants/File";

// import * as FileApi from "../api/actions/File";



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

export const deleteFileId = (id) => {
    return dispatch => {
        axios.delete("https://test-17409.firebaseio.com/files/" + id +".json")
        .then(() => {
            dispatch(removeFile(id));
        })
    }
}


export const openInnerFile = () => {
    return {
        type: FILE.OPEN_INNER_FILE
    }
}

export const setFiles = (files) => {
    return {
        type: FILE.SET_FILES,
        payload: files
    }
}

export const getFiles = () => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/files.json")
            .then(response => {
                const getedFiles = [];
                for (let key in response.data) {
                    getedFiles.push({
                        ...response.data[key],
                        id: [key]
                    });
                }
                dispatch(setFiles(getedFiles));
            })
            // .catch(error => {
            //     dispatch(FileActions.fetchFileFailed())
            // })
    }
}

export const setFileId = (file) => {
    return {
        type: FILE.SET_FILE_ID,
        payload: file
    }
}

export const getFileId = (id) => {
    return dispatch => {
        axios.get("https://test-17409.firebaseio.com/files/" + id +".json")
            .then(response => {                
                dispatch(setFileId(response.data));
            })
            .catch(() => {
                // dispatch(FileActions.fetchFileFailed());
                history.push("/not-found")
            })
    }
}


// export const fetchFileFailed = () => {
//     return {
//         type: FILE.FETCH_FILE_FAILED
//     }    
// }







// export const getFiles = () => (dispatch) => {
//     FileApi.getFiles()
//     .then(files => {
//         dispatch ({
//             type: FILE.SET_FILES,
//             payload: files
//         })
//     })
// }

// export const getFileId = (id, history) => (dispatch) => {
//     FileApi.getFileId(id)
//     .then (file => {
//         dispatch ({
//             type: FILE.SET_FILE_ID,
//             payload: file
//         })
//     })
//     .catch(() => {
//         history.push("/not-found")
//     })
// }

