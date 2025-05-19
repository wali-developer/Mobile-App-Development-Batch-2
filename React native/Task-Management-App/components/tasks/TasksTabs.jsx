import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../../base/constants";
import { colors } from "../../base/colors";
import { useState } from "react";

const TasksTabs = ({ active, setActive, tabs }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Task</Text>
      <View style={styles.tabsRow}>
        {tabs.map((tab, index) => {
          const activeTab = tab?.value === active?.value;
          return (
            <TouchableOpacity
              style={[styles.tab, activeTab ? styles.activeTab : {}]}
              key={index}
              onPress={() => setActive(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab ? colors.white : "#9A9A9A" },
                ]}
              >
                {tab?.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TasksTabs;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.PoppinsSemibold,
    color: colors.text,
  },
  tabsRow: {
    flexDirection: "row",
    marginTop: 5,
    gap: 15,
  },
  tab: {
    borderWidth: 1,
    borderColor: colors.border,
    height: 39,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  activeTab: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  tabText: {
    fontSize: 12,
    fontFamily: fonts.PoppinsMedium,
  },
});
