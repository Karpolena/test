import axios from "axios";

export const getPage = options => {
  return axios.post("api/get-page", options).then(resp => resp.data);
};