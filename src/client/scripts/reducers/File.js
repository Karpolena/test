import { FILE } from "../constants/File";

let initialState = {
    files: [],
    file: null,
    activeFile: null,
    isOpenInnerFile: false,
    error: false,
    isShowBack: false   
}



const setFiles = (state, payload) => {
    return {
        ...state,
        files: payload,
        error: false
    }
}

const setFileId = (state, payload) => {
    return {
        ...state,
        file: payload,
        error: false
    }
}

// const setActiveFile = (state, payload) => {
//     return {
//         ...state,
//         activeFile: payload
//     }
// }

const addFile = (state, payload) => {
    return {
        ...state,
        files: state.files.concat(payload)
    }
}

const removeFile = (state, payload) => {
    return {
        ...state,
        files: state.files.filter(fl => fl.id !== payload)
    }
}

const openInnerFile = (state) => {
    return {
        ...state, isOpenInnerFile: true
    }
}

const fetchFileFailed = (state) => {
    return {
        ...state,
        error: true
    }
}

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILE.SET_FILES:
            return setFiles(state, action.payload);
        case FILE.SET_FILE_ID:
            return setFileId(state, action.payload);
        // case FILE.SET_ACTIVE_FILE:
        //     return setActiveFile(state, action.payload);
        case FILE.ADD_FILE:
            return addFile(state, action.payload);
        case FILE.REMOVE_FILE:
            return removeFile(state, action.payload);
        case FILE.OPEN_INNER_FILE:
            return openInnerFile(state);
        case FILE.FETCH_FILE_FAILED:
            return fetchFileFailed(state);
        default:
            return state;
    }
}

export default fileReducer;