import { connect } from "react-redux";
import NewsList from "../components/TopNewsHeadLines";
import { getTopNewsHeadLines, cleartopHeadlines } from "../actions/news.actions";

const mapStateToProps = state => {
  return {
    loading: state.news.loading,
    error: state.news.error,
    status: state.news.status,
    topNewsHeadLines: state.news.topNewsHeadLines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopNewsHeadLines: (serachkey) => {
      dispatch(getTopNewsHeadLines(serachkey));
    },
    cleartopHeadlines: (serachkey) => {
      dispatch(cleartopHeadlines(serachkey));
    }

  };
};

const TopNewsHeadLinesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
export default TopNewsHeadLinesContainer;
