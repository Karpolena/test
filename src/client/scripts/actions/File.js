import axios from "axios";
import { FILE_CONSTANTS } from "../constants/File";
import { push } from "react-router-redux";

export const createFile = file => dispatch => {
    axios
        .post("api/create-file", file)
        .then(response => {
            /* dispatch({
                type: FILE_CONSTANTS.CREATE_FILE,
                payload: response.data
            }); */
            dispatch(push(`/file/${response.data.id}`));
        })
        .catch(error => console.log(error));
};

export const removeFile = id => dispatch => {
    axios
        .delete("api/remove-file/" + id)
        .then(response => {
            dispatch({
                type: FILE_CONSTANTS.REMOVE_FILE,
                payload: response.data
            });
            console.log(response);
        })
        .catch(error => console.log(error));
};

export const updateFile = (file, id) => dispatch => {
    axios
        .put("api/update-file/" + id, file)
        .then(response => {
            dispatch({
                type: FILE_CONSTANTS.UPDATE_FILE,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
};
