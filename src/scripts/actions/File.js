import { FILE } from "../constants/File";

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

