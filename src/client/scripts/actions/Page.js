import * as PageApi from "./../api/Page";

import PAGE_CONSTANTS from "./../constants/Page";

export const getPage = options => dispatch => {
    dispatch({
        type: PAGE_CONSTANTS.FETCHING_PAGE,
        payload: { activePageType: options.type }
    });
    PageApi.getPage(options).then(payload => {
        dispatch({
            type: PAGE_CONSTANTS.SET_PAGE,
            payload: { ...payload, activePageType: options.type, context: options.context}
        });
    });
};
