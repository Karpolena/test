import { ACTIVE } from "../constants/Active";
import { TYPE } from "./../constants/Page";

export const setActiveFile = id => {
    return {
        type: ACTIVE.SET_ACTIVE,
        payload: {
            id,
            type: TYPE.FILE
        }
    };
};
export const setActiveFolder = id => {
    return {
        type: ACTIVE.SET_ACTIVE,
        payload: {
            id,
            type: TYPE.FOLDER
        }
    };
};
export const removeActive = () => {
    return {
        type: ACTIVE.REMOVE_ACTIVE
    };
};
