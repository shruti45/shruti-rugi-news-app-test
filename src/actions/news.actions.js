import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_NEWS_HEADLINES_REQUEST = "GET_NEWS_HEADLINES_REQUEST";
export const GET_NEWS_HEADLINES_SUCCESS = "GET_NEWS_HEADLINES_SUCCESS";
export const GET_NEWS_HEADLINES_FAILURE = "GET_NEWS_HEADLINES_FAILURE";

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

export function getTopNewsHeadLines() {
  return async (dispatch, getState, api) => {
    dispatch(getTopNewsHeadLinesRequest());
    try {
      const result = await api.get(
        "v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526"
      );
      const resultJson = await result.json();
      dispatch(getTopNewsHeadLinesSuccess(resultJson));
    } catch (e) {
      dispatch(getTopNewsHeadLinesFailure(e.message));
    }
  };
}
