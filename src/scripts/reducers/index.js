import { combineReducers } from "redux";


import folderReducer from "./Folder";
import fileReducer from "./File";
import modalReducer from "./Modal";

const reducers = combineReducers({
    folderStore: folderReducer,
    fileStore: fileReducer,
    modalStore: modalReducer
})

export default reducers;