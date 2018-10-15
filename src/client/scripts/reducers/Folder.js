import { FOLDER } from "../constants/Folder";


let initialState = {
    folder: null
}


const createFolder = (state, payload) => {
    return {
        ...state,
        folder: payload
    }
}

const folderReducer = (state = initialState, action) => {
    switch (action.type) {      
        case FOLDER.CREATE_FOLDER:
            return createFolder(state, action.payload);
        default:
            return state;
    }
}

export default folderReducer;
