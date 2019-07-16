import { StyleSheet } from "react-native";
import { IMAGE_BACKGROUND_COLOR } from "../utils/constants";
const ListItemStyles = StyleSheet.create({
  container: {
    height: 110,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 3
  },
  titleHolder: {
    flex: 1,
    marginRight: 10
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  author: {
    fontSize: 12,
    marginTop: 10
  },
  imageHolder: {
    width: 85,
    height: 85,
    backgroundColor: IMAGE_BACKGROUND_COLOR
  },
  image: { width: "100%", height: "100%" }
});
export default ListItemStyles;
