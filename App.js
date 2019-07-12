import React, { Component } from "react";

export default class App extends Component {
  UNSAFE_componentWillMount() {
    console.disableYellowBox = true;
  }
  render() {
    return <Text>Welcome</Text>;
  }
}
