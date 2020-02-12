import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Block, Input, Text, Badge, Card } from "../components";
import { theme, mocks } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

class Browse extends Component {
  state = {
    active: "Products"
  };
  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.setState({ active: tab })}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile, navigation, categories } = this.props;
    const tabs = ["Products", "Inspirations", "Shop"];
    return (
      <Block style={styles.container}>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            {" "}
            Browse{" "}
          </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base }}
        >
          <Block row flex={false} space="between" style={styles.categories}>
            {categories.map(category => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Explore", { category })}
                  key={category.name}
                >
                  <Card center middle shadow style={styles.category}>
                    <Badge
                      margin={[0, 0, 15]}
                      size={50}
                      color="rgba(41,216,143,0.20)"
                    >
                      <Image source={category.image} />
                    </Badge>
                    <Text medium height={20}>
                      {category.name}
                    </Text>
                    <Text gray caption>
                      {category.count} Products
                    </Text>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  category: {
    width: 120,
    height: 120
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  }
});
