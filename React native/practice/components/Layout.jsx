import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Layout = () => {
  return (
    <View style={{ flex: 1, width: "100%", gap: 10 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      {/* Main content */}
      <View style={styles.mainContainer}>
        <View style={[styles.flexCol, { flex: 1 }]}>
          <Text style={[styles.text, styles.hero]}>Hero</Text>
          <Text style={[styles.text, styles.sidebar]}>Sidebar</Text>
        </View>
        <View style={[styles.flexCol, { flex: 2 }]}>
          <Text style={[styles.text, styles.mainContent]}>Main Content</Text>
          <Text style={[styles.text, styles.extraContent]}>Extra Content</Text>
        </View>
      </View>

      {/* Related images and posts */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={styles.images}>
          <Text style={styles.text}>Related images</Text>
        </View>
        <View style={styles.posts}>
          <Text style={styles.text}>
            <Text style={styles.text}>Related posts</Text>
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={[styles.header, { backgroundColor: "orange" }]}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  mainContainer: {
    flexDirection: "row",
    gap: 10,
  },
  flexCol: {
    flexDirection: "column",
    gap: 10,
  },
  hero: {
    height: 140,
    backgroundColor: "dodgerblue",
    textAlign: "center",
  },
  sidebar: {
    height: 200,
    backgroundColor: "dodgerblue",
    textAlign: "center",
  },
  mainContent: {
    backgroundColor: "yellow",
    flexGrow: 1,
    color: "black",
    textAlign: "center",
  },
  extraContent: {
    height: 80,
    backgroundColor: "gray",
    textAlign: "center",
  },
  images: {
    flexGrow: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  posts: {
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
});
