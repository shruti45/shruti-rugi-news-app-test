import React, { Component } from "react";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TopNewsHeadLinesContainer from "./src/containers/TopNewsHeadLinesContainer";
import NewsDetails from "./src/components/NewsDetails";
const appStack = createStackNavigator({
  Home: {
    screen: TopNewsHeadLinesContainer
  },
  NewsDetails: {
    screen: NewsDetails
  }
});
const AppContainer = createAppContainer(appStack);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore()
    };
  }

  UNSAFE_componentWillMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <AppContainer />
      </Provider>
    );
  }
}
