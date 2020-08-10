import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
  ScrollableTab,
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import Tab1 from "./Tabs/General";
import Tab2 from "./Tabs/Business";
import Tab3 from "./Tabs/Technology";
import Tab4 from "./Tabs/Sports";
import Tab5 from "./Tabs/Entertainment";
import Tab6 from "./Tabs/Health";
import Tab7 from "./Tabs/Science";
export default class TabsExample extends Component {
  state = {
    loading: true,
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <View></View>;
    }
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#333945" }}>
          <Left />
          <Left />
          <Left />
          <Body>
            <Title>newZ</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab
            tabStyle={{ backgroundColor: "#333945" }}
            activeTabStyle={{ backgroundColor: "#333945" }}
            textStyle={{ color: "white" }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#333945" }}
            activeTabStyle={{ backgroundColor: "#333945" }}
            textStyle={{ color: "white" }}
            heading="Business"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#333945" }}
            activeTabStyle={{ backgroundColor: "#333945" }}
            textStyle={{ color: "white" }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#333945" }}
            activeTabStyle={{ backgroundColor: "#333945" }}
            textStyle={{ color: "white" }}
            heading="Sports"
          >
            <Tab4 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#333945" }}
            activeTabStyle={{ backgroundColor: "#333945" }}
            textStyle={{ color: "white" }}
            heading="Entertainment"
          >
            <Tab5 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#333945" }}
            activeTabStyle={{ backgroundColor: "#333945" }}
            textStyle={{ color: "white" }}
            heading="Health"
          >
            <Tab6 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#333945" }}
            activeTabStyle={{ backgroundColor: "#333945" }}
            textStyle={{ color: "white" }}
            heading="Science"
          >
            <Tab7 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
