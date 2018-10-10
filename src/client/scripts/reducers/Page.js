import PAGE_CONSTANTS, { TYPE } from "./../constants/Page";

class Page {
    constructor() {
        this.context = null;
        this.folders = new Map();
        this.files = new Map();
        this.fetching = false;
        this.activePageType = TYPE.FOLDER;
    }

    getState = () => ({
        ...{
            context: this.context,
            folders: this.folders,
            files: this.files,
            fetching: this.fetching,
            activePageType: this.activePageType
        }
    });

    _setFolders = folders => {
        if (!folders) return null;
        let _folders = new Map();
        folders.forEach(itm => {
            _folders.set(itm.id, itm);
        });
        return _folders;
    };

    _setFiles = files => {
        if (!files) return null;
        let _files = new Map();
        files.forEach(itm => {
            _files.set(itm.id, itm);
        });
        return _files;
    };

    setPage = ({ context, activePageType, files, folders }) => {
        this.context = context;
        this.activePageType = activePageType;
        this.files = this._setFiles(files);
        this.folders = this._setFolders(folders);
        this.fetching = false;
    };

    clearPage = ({ activePageType }) => {
        this.fetching = true;
        this.context = null;
        this.activePageType = activePageType;
        this.files = new Map();
        this.folders = new Map();
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
