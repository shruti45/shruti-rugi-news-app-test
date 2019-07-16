import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from "react-native";
import styles from "../styles/NewsListStyles";
import NewsListItem from "../coreComponents/ListItem";
import PropTypes from "prop-types";
import NetInfo from "@react-native-community/netinfo";
import colors from "../utils/colors";
import Header from "../coreComponents/Header";
import Icon from "react-native-vector-icons/Ionicons";
import { HOME, YOUR_DAILY_READ, FETCHING_NEWS } from "../utils/constants";
import Input from "../coreComponents/Input"


export default class TopNewsHeadLines extends Component {
  static navigationOptions = {
    title: " ",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isSearchBar: false,
      serackey: ""
    }
  }
  componentDidMount() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        this.props.getTopNewsHeadLines(this.state.serackey);
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
  openSerachBar() {
    this.setState({ isSearchBar: true })
  }

  closeSerachBar() {
    this.setState({ isSearchBar: false })
  }

  search(serachVal) {
    this.setState({ serackey: serachVal })
    if (serachVal && serachVal.length > 0) {
      this.props.cleartopHeadlines()
      this.props.getTopNewsHeadLines(serachVal);
    } else {
      this.props.cleartopHeadlines()
      this.props.getTopNewsHeadLines("");
    }


  }
  renderHeader() {
    if (this.state.isSearchBar) {
      return (
        <Header backgroundColor={colors.dividerColor}>
          <Header.LeftHeaderElem>
            <Input placeholder={"Type here..."} onChangeText={(val) => this.search(val)} />
          </Header.LeftHeaderElem>

          <Header.RightHeaderElem>
            <TouchableOpacity
              onPress={() => this.closeSerachBar()}
            >
              <Icon name="search" size={30} color={colors.white} />
            </TouchableOpacity>
          </Header.RightHeaderElem>

        </Header>)
    } else {
      return (
        <Header backgroundColor={colors.statusBarColor}>
          <Header.LeftHeaderElem>
            <Text style={styles.headerText}>{HOME}</Text>
          </Header.LeftHeaderElem>

          <Header.RightHeaderElem>
            <TouchableOpacity
              onPress={() => this.openSerachBar()}
            >
              <Icon name="search" size={30} color={colors.white} />
            </TouchableOpacity>
          </Header.RightHeaderElem>

        </Header>

      )
    }

  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderStatusBar()}
        {this.renderHeader()}
        {this.props.loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} color={"#A9A9A9"} />
            <Text style={styles.loaderText}>{FETCHING_NEWS}</Text>
          </View>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{YOUR_DAILY_READ}</Text>
        </View>

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
