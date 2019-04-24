import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import config from "../../config";

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  render() {
    return (
      <View style={styles.footer}>
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.nav.popToTop()}>
            <Image style={styles.icon} source={config.images.houseIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.nav.navigate("search")}>
            <Image style={styles.icon} source={config.images.searchIcon} />
          </TouchableOpacity>

          <Image style={styles.icon} source={config.images.calendarIcon} />
          <Image style={styles.icon} source={config.images.mailIcon} />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.nav.navigate("profile")}>
            <Image style={styles.icon} source={config.images.profileIcon} />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    width: 100 + "%",
    height: 6 + "%",
    bottom: 0,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 45, width: 45, 
    tintColor: "black",
    marginTop: 0,
    marginRight: 5 + "%",
  },
});

export default BottomNav;
