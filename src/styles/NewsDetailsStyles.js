import { StyleSheet } from "react-native";
import { IMAGE_BACKGROUND_COLOR } from "../utils/constants";
import colors from "../utils/colors";
const NewsDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15
  },
  title: {
    fontSize: 16,
    color: "#555",
    paddingTop: 10
  },
  image: {
    width: "100%",
    height: 250,
    marginVertical: 20,
    backgroundColor: IMAGE_BACKGROUND_COLOR
  },
  authorAndDateHolder: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  author: {
    fontSize: 14,
    color: "black"
  },
  publishedAt: {
    fontSize: 12,
    color: "#a9a9a9",
    marginLeft: 10
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.dividerColor
  }
});
export default NewsDetailsStyles;
