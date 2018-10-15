import { combineReducers } from "redux";


 import folderReducer from "./Folder";
import fileReducer from "./File"; 
import modalReducer from "./Modal";
import activeReducer from "./Active";
import pageReducer from "./Page";

const reducers = combineReducers({
    folderStore: folderReducer,
    fileStore: fileReducer, 
    modalStore: modalReducer,
    activeStore: activeReducer,
    pageStore: pageReducer
})

export default reducers;