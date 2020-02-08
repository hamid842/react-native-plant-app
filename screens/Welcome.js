import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, Block } from "../components";

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Block center middle>
        <Text>Welcome</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
