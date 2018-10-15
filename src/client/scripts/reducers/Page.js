import PAGE_CONSTANTS, { TYPE } from "./../constants/Page";

class Page {
    constructor() {
        this.context = null;
        this.contextElement = null;
        this.fetching = false;
        this.activePageType = TYPE.FOLDER;
    }

    getState = () => ({
        ...{
            context: this.context,
            fetching: this.fetching,
            activePageType: this.activePageType
        }
    });

    setPage = ({ context, activePageType, contextElement }) => {
        this.context = context;
        this.activePageType = activePageType;
        this.contextElement = contextElement;
        this.fetching = false;
    };

    clearPage = ({ activePageType }) => {
        this.fetching = true;
        this.context = null;
        this.activePageType = activePageType;
        this.contextElement = null;
    };
}

const page = new Page();

const reducer = (state = page.getState(), action) => {
    switch (action.type) {
        case PAGE_CONSTANTS.SET_PAGE:
            page.setPage(action.payload);
            break;
        case PAGE_CONSTANTS.FETCHING_PAGE:
            page.clearPage(action.payload);
            break;
        default:
            return state;
    }
    return page.getState();
};

export default reducer;
