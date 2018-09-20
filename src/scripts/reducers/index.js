import { combineReducers } from "redux";
import folderReducer from "./Folder";
import fileReducer from "./File";

const reducers = combineReducers({
    folderStore: folderReducer,
    fileStore: fileReducer
})

export default reducers;