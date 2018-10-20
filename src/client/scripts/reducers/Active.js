import { ACTIVE } from "../constants/Active";
import PAGE_CONSTANTS from "./../constants/Page";

class Active {
    constructor() {
        this.selectElement = null;
    }

    getState() {
        return {
            selectElement: this.selectElement
        };
    }

    setElement = data => {
        this.selectElement = data;
    };

    removeElement = () => {
        this.selectElement = null;
    };
}

const active = new Active();

const reducer = (state = active.getState(), action) => {
    switch (action.type) {
        case ACTIVE.SET_ACTIVE:
            active.setElement(action.payload);
            break;
        case ACTIVE.REMOVE_ACTIVE:
        case PAGE_CONSTANTS.FETCHING_PAGE:
            active.removeElement();
            break;
        default:
            return state;
    }
    return active.getState();
};
export default reducer;
/* 
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

const removeActive = (state) => {
    return {
        ...state,
        activeFolder: null,
        activeFile: null
    }
}

const activeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE.SET_ACTIVE_FILE:
            return setActiveFile(state, action.payload);
        case ACTIVE.SET_ACTIVE_FOLDER:
            return setActiveFolder(state, action.payload);
        case ACTIVE.REMOVE_ACTIVE:
            return removeActive(state);
        default: 
            return state;
    }
}

export default activeReducer; */
