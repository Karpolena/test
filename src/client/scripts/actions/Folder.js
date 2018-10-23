import axios from "axios";
import { FOLDER_CONSTANTS } from "../constants/Folder";
import { push } from "react-router-redux";

export const createFolder = folder => dispatch => {
    axios
        .post("api/create-folder", folder)
        .then(response => {
            dispatch({
                type: FOLDER_CONSTANTS.CREATE_FOLDER,
                payload: response.data
            });
            dispatch(push(`/folder/${response.data.id}`));
        })
        .catch(error => console.log(error));
};

export const removeFolder = id => dispatch => {
    axios
        .delete("api/remove-folder/" + id)
        .then(response => {
            dispatch({
                type: FOLDER_CONSTANTS.REMOVE_FOLDER,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
};

export const updateFolder = (folder, id) => dispatch => {
    axios
        .put("api/update-folder/" + id, folder)
        .then(response => {
            dispatch({
                type: FOLDER_CONSTANTS.UPDATE_FOLDER,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
};
