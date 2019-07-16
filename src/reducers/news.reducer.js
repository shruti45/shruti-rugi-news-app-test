import * as newsActions from "../actions/news.actions";

const topNews = (
  state = {
    loading: false,
    topNewsHeadLines: null,
    status: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case newsActions.GET_NEWS_HEADLINES_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    }
    case newsActions.GET_NEWS_HEADLINES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        topNewsHeadLines: action.topNewsHeadLines
      });
    }
    case newsActions.GET_NEWS_HEADLINES_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error
      });
    }
    case newsActions.CLEAR_TOP_HEADLINES: {
      return Object.assign({}, state, {
        topNewsHeadLines: null
      });
    }
    default:
      return state;
  }
};
export default topNews;
