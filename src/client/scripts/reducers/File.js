import PAGE_CONSTANTS, {TYPE} from "./../constants/Page";
import { FILE_CONSTANTS } from "./../constants/File";
class File {
    constructor() {
        this.files = new Map();
        this.file = null;
    }

    getState = () => ({
        ...{
            files: this.files,
            file: this.file
        }
    });

    _setFiles = files => {
        if (!files) return null;
        let _files = new Map();
        files.forEach(itm => {
            _files.set(itm.id, itm);
        });
        this.files = _files;
    };

    setPage = ({ files, activePageType, contextElement }) => {
        this._setFiles(files);
        if(activePageType === TYPE.FILE && contextElement) {
            this.file = contextElement;
        } else {
            this.file = null;
        }
    };

    clearPage = () => {
        this.file = null;
        this.files = new Map();
    };

    createFile = file => {
        if (!file) return null;
        let newFile = new Map();
        newFile.set(file.id, file);
        this.files = new Map([...this.files, ...newFile]);
    };

    // removeFile = id => {
    //     this.files = this.files.filter(itm => itm.id !== id)
    // };


    // updateFile = ({file, id}) => {
        

    // };
}

const file = new File();

export default (state = file.getState(), action) => {
    switch (action.type) {
        case PAGE_CONSTANTS.SET_PAGE:
            file.setPage(action.payload);
            break;
        case PAGE_CONSTANTS.FETCHING_PAGE:
            file.clearPage(action.payload);
            break;
        case FILE_CONSTANTS.CREATE_FILE:
            file.createFile(action.payload);
            break;
        case FILE_CONSTANTS.REMOVE_FILE:
            file.removeFile(action.payload);
            break;
        case FILE_CONSTANTS.UPDATE_FILE:
            file.updateFile(action.payload);
            break;
        default:
            return state;
    }
    return file.getState();
};
