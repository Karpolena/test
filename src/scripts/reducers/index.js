import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
 
import folderReducer from "./Folder";
import fileReducer from "./File";
import modalReducer from "./Modal";

const reducers = combineReducers({
    folderStore: folderReducer,
    fileStore: fileReducer,
    modalStore: modalReducer,
    routing: routerReducer
})

export default reducers;