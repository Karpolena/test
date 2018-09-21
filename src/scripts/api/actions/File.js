// import * as FileActions from "../../actions/File";

// export const getFiles = () => {
//     return dispatch => {
//         axios.get("https://test-17409.firebaseio.com/files.json")
//             .then(response => {
//                 dispatch(FileActions.setFiles(response.data));
//             })
//             .catch(error => {
//                 dispatch(FileActions.fetchFileFailed())
//             })
//     }
// }

// export const getFileId = (id) => {
//     return dispatch => {
//         axios.get("https://test-17409.firebaseio.com/files.json")
//         .then(response => {
//             let file = response.data.find(fl => fl.id.toString() === id);
//             if (file) 
//                 dispatch(FileActions.setFileId(file));
//         })
//         .catch(error => {
//             dispatch(FileActions.fetchFileFailed())
//         })
//     }
// }


import {data} from "../data/fileData";

export const getFiles = () => {
     return new Promise((resolve) => {
         resolve(data);
     });
 }

export const getFileId = (id) => {
    return new Promise((resolve, reject) => {
         let file = data.find(fl => fl.id.toString() === id);
         if(file) return resolve(file);
         reject("File not found");
     });
}
