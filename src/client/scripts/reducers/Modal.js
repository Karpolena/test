import { MODAL } from "../constants/Modal";



let initialstate = {  
    showBackground: false, 
    openSelect: false,
    openCreate: false,
    fileType: false,
    folderType: true
}


const openModalSelect = (state) => {
    return {
        ...state,
        showBackground: true,
        openSelect: true,
        openCreate: false
    }
} 

const openModalCreate = (state) => {
    return {
        ...state,
        showBackground: true,
        openSelect: false,
        openCreate: true
    }
}

const closeModal = (state) => {
    return {
        ...state,
        showBackground: false,
        openSelect: false,
        openCreate: false
    }
}

const setTypeFolder = (state) => {
    return {
        ...state,        
        fileType: false,
        folderType: true
    }
}

const setTypeFile = (state) => {
    return {
        ...state,
        fileType: true,
        folderType: false
    }
}



const modalReducer = (state = initialstate, action) => {
    switch (action.type) {        
        case MODAL.OPEN_MODAL_SELECT:
            return openModalSelect(state);
        case MODAL.OPEN_MODAL_CREATE:
            return openModalCreate(state);
        case MODAL.CLOSE_MODAL:
            return closeModal(state);
        case MODAL.SET_TYPE_FOLDER:
            return setTypeFolder(state);
        case MODAL.SET_TYPE_FILE:
            return setTypeFile(state);
        default:
            return state;
    }
}

export default modalReducer;