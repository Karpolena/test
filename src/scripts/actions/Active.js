
import { ACTIVE } from "../constants/Active";


export const setActiveFile = (id) => {
    return {
        type: ACTIVE.SET_ACTIVE_FILE,
        payload: id
    }
}
export const setActiveFolder = (id) => {
    return {
        type: ACTIVE.SET_ACTIVE_FOLDER,
        payload: id
    }
}