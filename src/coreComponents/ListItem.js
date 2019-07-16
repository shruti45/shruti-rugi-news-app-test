import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/ListItemStyles";
import PropTypes from "prop-types";
const ListItem = props => {
  onPress = () => {
    const { onPress } = props;
    onPress && onPress();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={this.onPress}>
      <View style={styles.titleHolder}>
        <Text numberOfLines={3} ellipsizeMode={"tail"} style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
      <View style={styles.imageHolder}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
ListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func
};
