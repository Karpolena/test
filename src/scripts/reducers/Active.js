import { ACTIVE } from "../constants/Active";


let initialState = {
    activeFile: null,
    activeFolder: null
}



const setActiveFile = (state, payload) => {
    return {
        ...state,
        activeFile: payload,
        activeFolder: null
    }
}

const setActiveFolder = (state, payload) => {
    return {
        ...state,
        activeFolder: payload,
        activeFile: null
    }
}

const activeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE.SET_ACTIVE_FILE:
            return setActiveFile(state, action.payload);
        case ACTIVE.SET_ACTIVE_FOLDER:
            return setActiveFolder(state, action.payload);
        default: 
            return state;
    }
}

export default activeReducer;