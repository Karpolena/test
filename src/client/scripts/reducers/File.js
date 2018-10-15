import { FILE } from "../constants/File";


let initialState = {
    file: null
}


const createFile = (state, payload) => {
    return {
        ...state,
        file: payload
    }
}

const fileReducer = (state = initialState, action) => {
    switch (action.type) {      
        case FILE.CREATE_FILE:
            return createFile(state, action.payload);
        default:
            return state;
    }
}

export default fileReducer;