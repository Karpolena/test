import { MODAL } from "../constants/Modal";

class Modal {
    constructor() {
        this.isOpen = false;
        this.component = null;
    }

    getState = () => {
        return {
            isOpen: this.isOpen,
            component: this.component
        };
    };

    open = component => {
        if (component) {
            this.component = component;
            this.isOpen = true;
        } else {
            this.component = null;
            this.isOpen = false;
        }
    };

    close = () => {
        this.component = null;
        this.isOpen = false;
    };
}

const modal = new Modal();

const reducer = (state = modal.getState(), action) => {
    switch (action.type) {
        case MODAL.OPEN_MODAL:
            modal.open(action.payload);
            break;
        case MODAL.CLOSE_MODAL:
            modal.close();
            break;
        default:
            return state;
    }
    return modal.getState();
};

export default reducer;
