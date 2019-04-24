import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";
import { PostFeed } from "../container";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import { withNavigation } from "react-navigation";

class HomesCo extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <TopNav nav={this.props.navigation} />
        <PostFeed navigation={this.props.navigation} />
        <BottomNav nav={this.props.navigation} />
      </View>
    );
  }
}

export default withNavigation(HomesCo);
