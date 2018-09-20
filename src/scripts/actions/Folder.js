import { FOLDER } from "../constants/Folder";

// export const saveFolder = (folder) => {
//     return {
//         type: FOLDER.SAVE_FOLDER,
//         payload: folder
//     }
// }

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

