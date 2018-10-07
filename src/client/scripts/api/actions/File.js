// import axios from "axios";


// import { FILE } from "../../constants/File";


// import * as FileActions from "../../constants/File";


// export const getFiles = () => {
//     return dispatch => {
//         axios.get("https://test-17409.firebaseio.com/files.json")
//             .then(response => {
//                 dispatch(FileActions.setFiles(response.data));
//             })
            // .catch(error => {
            //     dispatch(FileActions.fetchFileFailed())
            // })
//     }
// }



// export const getFileId = (id, history) => {
//     return dispatch => {
//         axios.get("https://test-17409.firebaseio.com/files.json")
//         .then(response => {
//             let file = response.data.find(fl => fl.id.toString() === id);
//             if (file) 
//             dispatch(FileActions.setFileId(file));
//         })
//         .catch(() => {
            // dispatch(FileActions.fetchFileFailed());
//             history.push("/not-found")
//         })
//     }
// }


// import {data} from "../data/fileData";

// export const getFiles = () => {
//      return new Promise((resolve) => {
//          resolve(data);
//      });
//  }

// export const getFileId = (id) => {
//     return new Promise((resolve, reject) => {
//          let file = data.find(fl => fl.id.toString() === id);
//          if(file) return resolve(file);
//          reject("File not found");
//      });
// }
