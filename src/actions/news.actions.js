import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_NEWS_HEADLINES_REQUEST = "GET_NEWS_HEADLINES_REQUEST";
export const GET_NEWS_HEADLINES_SUCCESS = "GET_NEWS_HEADLINES_SUCCESS";
export const GET_NEWS_HEADLINES_FAILURE = "GET_NEWS_HEADLINES_FAILURE";

export const CLEAR_TOP_HEADLINES = "CLEAR_TOP_HEADLINES";

export function getTopNewsHeadLinesRequest() {
  return {
    type: GET_NEWS_HEADLINES_REQUEST,
    status: REQUEST
  };
}
export function getTopNewsHeadLinesSuccess(topNewsHeadLines) {
  return {
    type: GET_NEWS_HEADLINES_SUCCESS,
    status: SUCCESS,
    topNewsHeadLines
  };
}
export function getTopNewsHeadLinesFailure(error) {
  return {
    type: GET_NEWS_HEADLINES_FAILURE,
    status: ERROR,
    error
  };
}

export function getTopNewsHeadLines(searchKey) {
  return async (dispatch, getState, api) => {
    dispatch(getTopNewsHeadLinesRequest());
    try {
      let url = searchKey !== "" ? `v2/everything?q=${searchKey}&from=2019-07-15&to=2019-07-15&sortBy=popularity&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526` : `v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526`
      const result = await api.get(url);
      const resultJson = await result.json();
      dispatch(getTopNewsHeadLinesSuccess(resultJson));
    } catch (e) {
      dispatch(getTopNewsHeadLinesFailure(e.message));
    }
  };
}


export function cleartopHeadlines(error) {
  return {
    type: CLEAR_TOP_HEADLINES,

  };
}