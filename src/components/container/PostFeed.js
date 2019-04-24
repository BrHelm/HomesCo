import React, { Component } from "react";
import { Post } from "../presentation";
import { FlatList } from "react-native";
import { withNavigation } from 'react-navigation';

class PostFeed extends Component {
  constructor(props) {
    super(props);
  }

  _renderPost({ item }) {
    return (<Post item={item} />);
  }

  _returnKey(item) {
    return item.toString();
  }

  render() {
    return (
      <FlatList navigation={this.props.navigation}
        data={[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ]}
        keyExtractor={this._returnKey}
        renderItem={this._renderPost}
      />
    );
  }
}

export default withNavigation(PostFeed);
