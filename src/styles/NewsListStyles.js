import { StyleSheet } from "react-native";
import colors from "../utils/colors";
const NewsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  titleContainer: {
    height: 50,
    padding: 10,
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  list: {
    padding: 10
  },
  loaderText: {
    marginTop: 10,
    fontSize: 14,
    color: "black"
  },
  headerText: {
    color: colors.white,
    fontSize: 16,
    paddingLeft: 10
  }
});
export default NewsListStyles;
