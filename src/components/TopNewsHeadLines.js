import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StatusBar
} from "react-native";
import styles from "../styles/NewsListStyles";
import NewsListItem from "../coreComponents/ListItem";
import PropTypes from "prop-types";
import NetInfo from "@react-native-community/netinfo";
import colors from "../utils/colors";
import Header from "../coreComponents/Header";
import Icon from "react-native-vector-icons/Ionicons";
import { HOME, YOUR_DAILY_READ, FETCHING_NEWS } from "../utils/constants";

export default class TopNewsHeadLines extends Component {
  static navigationOptions = {
    title: " ",
    header: null
  };
  componentDidMount() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        this.props.getTopNewsHeadLines();
      }
    });
  }

  renderStatusBar() {
    return (
      <StatusBar
        translucent={false}
        backgroundColor={colors.statusBarColor}
        hidden={false}
      />
    );
  }
  navigateTo = item => {
    const { navigate } = this.props.navigation;
    navigate("NewsDetails", { item });
  };
  renderItem = item => {
    return (
      <NewsListItem
        title={item.title}
        author={item.author}
        image={item.urlToImage}
        onPress={() => this.navigateTo(item)}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderStatusBar()}
        <Header backgroundColor={colors.statusBarColor}>
          <Header.LeftHeaderElem>
            <Text style={styles.headerText}>{HOME}</Text>
          </Header.LeftHeaderElem>

          <Header.RightHeaderElem>
            <Icon name="search" size={30} color={colors.white} />
          </Header.RightHeaderElem>
        </Header>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{YOUR_DAILY_READ}</Text>
        </View>
        {this.props.loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} color={"#A9A9A9"} />
            <Text style={styles.loaderText}>{FETCHING_NEWS}</Text>
          </View>
        )}
        {this.props.topNewsHeadLines &&
          this.props.topNewsHeadLines.articles.length > 0 && (
            <FlatList
              data={this.props.topNewsHeadLines.articles}
              contentContainerStyle={styles.list}
              keyExtractor={(item, index) => item.title}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => this.renderItem(item)}
            />
          )}
      </View>
    );
  }
}
TopNewsHeadLines.propTypes = {
  getTopNewsHeadLines: PropTypes.func,
  topNewsHeadLines: PropTypes.object,
  loading: PropTypes.bool
};
