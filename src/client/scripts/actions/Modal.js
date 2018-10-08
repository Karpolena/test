import { MODAL } from "../constants/Modal";



export const openModalSelect = () => {
    return {
        type: MODAL.OPEN_MODAL_SELECT
    }
}

export const openModalCreate = () => {
    return {
        type: MODAL.OPEN_MODAL_CREATE
    }
}

export const closeModal = () => {
    return {
        type: MODAL.CLOSE_MODAL
    }
}

export const setTypeFolder = () => {
    return {
        type: MODAL.SET_TYPE_FOLDER
    }
}

export const setTypeFile = () => {
    return {
        type: MODAL.SET_TYPE_FILE
    }
}