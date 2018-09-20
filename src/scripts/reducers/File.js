import { FILE } from "../constants/File";

let initialState = {
    files: [],
    file: [],
    isOpenInnerFile: false,
    error: false
}

const setFiles = (payload) => {
    return {
        ...state,
        files: payload,
        error: false
    }
}

const setFileId = (payload) => {
    return {
        ...state,
        file: payload,
        error: false
    }
}

const removeFile = (payload) => {
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

const fetchFileFailed = () => {
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