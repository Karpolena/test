import { FILE } from "../constants/File";

// export const saveFile = (file) => {
//     return {
//         type: FILE.SAVE_FILE,
//         payload: file
//     }
// }

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

