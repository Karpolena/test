import axios from "axios";

import PAGE_CONSTANTS from "./../constants/Page";

export const getPage = options => dispatch => {
    dispatch({
        type: PAGE_CONSTANTS.FETCHING_PAGE,
        payload: { activePageType: options.type }
    });
    axios
        .post("api/get-page", options)
        .then(resp => resp.data)
        .then(payload => {
            dispatch({
                type: PAGE_CONSTANTS.SET_PAGE,
                payload: {
                    ...payload,
                    activePageType: options.type,
                    context: options.context
                }
            });
        });
};
