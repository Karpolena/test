import { POPUP } from "../constants/Popup";

export const open = (anchorEl, component) => {
    return {
        type: POPUP.OPEN_POPUP,
        payload: { anchorEl, component }
    };
};

export const close = () => {
    return {
        type: POPUP.CLOSE_POPUP
    };
};
