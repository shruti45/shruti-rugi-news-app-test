import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import styles from "../styles/NewsDetailsStyles";
import moment from "moment";
import colors from "../utils/colors";
import Header from "../coreComponents/Header";
import Icon from "react-native-vector-icons/Ionicons";
import headerStyles from "../styles/HeaderStyles";
export default class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  static navigationOptions = {
    title: " ",
    header: null
  };

  renderStatusBar() {
    return (
      <StatusBar
        translucent={false}
        backgroundColor={colors.statusBarColor}
        hidden={false}
      />
    );
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ data: params.item || {} });
  }

  render() {
    const { data } = this.state;
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.renderStatusBar()}
        <Header backgroundColor={colors.white}>
          <Header.LeftHeaderElem>
            <TouchableOpacity
              style={headerStyles.TouchableContainer}
              onPress={() => goBack()}
            >
              <Icon name="arrowleft" size={30} color={colors.balck} />
            </TouchableOpacity>
          </Header.LeftHeaderElem>

          <Header.RightHeaderElem>
            <Icon name="search" size={30} color={colors.white} />
          </Header.RightHeaderElem>
        </Header>
        <View style={styles.divider} />
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.authorAndDateHolder}>
          <Text style={styles.author}>{data.author}</Text>
          <Text style={styles.publishedAt}>
            {moment(data.publishedAt).format("MM/DD/YYYY")}
          </Text>
        </View>
        <Image style={styles.image} source={{ uri: data.urlToImage }} />
        <Text>{data.content}</Text>
      </View>
    );
  }
}
