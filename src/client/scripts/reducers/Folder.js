import PAGE_CONSTANTS, {TYPE} from "./../constants/Page";
import { FOLDER_CONSTANTS } from "../constants/Folder";
class Folder {
    constructor() {
        this.folders = new Map();
        this.folder = null;
    }

    getState = () => ({
        ...{
            folders: this.folders,
            folder: this.folder
        }
    });

    _setFolders = folders => {
        if (!folders) return null;
        let _folders = new Map();
        folders.forEach(itm => {
            _folders.set(itm.id, itm);
        });
        this.folders = _folders;
    };

    setPage = ({ folders, activePageType, contextElement }) => {
        this._setFolders(folders);
        if(activePageType === TYPE.FOLDER && contextElement) {
            this.folder = contextElement;
        } else {
            this.folder = null;
        }
    
    };

    clearPage = () => {
        this.folder = null;
        this.folders = new Map();
    };

    setFolder = folder => {
        if (!folder) return null;
        let newFolder = new Map();
        newFolder.set(folder.id, folder);
        this.folders = new Map([...this.folders, ...newFolder]);
    };

    removeFolder = id => {
        this.folders = this.folders.filter(itm => itm.id !== id)
    }
}

const folder = new Folder();

export default (state = folder.getState(), action) => {
    switch (action.type) {
        case PAGE_CONSTANTS.SET_PAGE:
            folder.setPage(action.payload);
            break;
        case PAGE_CONSTANTS.FETCHING_PAGE:
            folder.clearPage(action.payload);
            break;
        case FOLDER_CONSTANTS.CREATE_FOLDER:
            folder.setFolder(action.payload);
            break;
        case FOLDER_CONSTANTS.REMOVE_FOLDER:
            folder.removeFolder(action.payload);
            break;
        default:
            return state;
    }

    return folder.getState();
};
