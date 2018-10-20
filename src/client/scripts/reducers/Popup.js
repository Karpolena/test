import { POPUP } from "../constants/Popup";

class Popup {
    constructor() {
        this.isOpen = false;
        this.component = null;
        this.anchorEl = null;
    }

    getState = () => {
        return {
            isOpen: this.isOpen,
            component: this.component,
            anchorEl: this.anchorEl
        };
    };

    open = ({ component, anchorEl }) => {
        if (component && anchorEl) {
            this.component = component;
            this.isOpen = true;
            this.anchorEl = anchorEl;
        } else {
            this.component = null;
            this.isOpen = false;
            this.anchorEl = null;
        }
    };

    close = () => {
        this.component = null;
        this.isOpen = false;
        this.anchorEl = null;
    };
}

const popup = new Popup();

const reducer = (state = popup.getState(), action) => {
    switch (action.type) {
        case POPUP.OPEN_POPUP:
            popup.open(action.payload);
            break;
        case POPUP.CLOSE_POPUP:
            popup.close();
            break;
        default:
            return state;
    }
    return popup.getState();
};

export default reducer;
