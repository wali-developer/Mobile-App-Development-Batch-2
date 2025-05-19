import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../base/colors";
import { fonts } from "../../base/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActionsDropdown from "../common/ActionsDropdown";
import { axiosInstanace } from "../../base/utils/axios";

const periorityColors = {
  high: colors.primary,
  medium: "#CC00FF",
  low: "green",
};

const Task = ({ item, refreshData }) => {
  const deleteTask = async () => {
    try {
      if (item?._id) {
        await axiosInstanace.delete(`api/todo/delete/${item?._id}`);
        refreshData();
      }
    } catch (error) {
      console.log("Error deleting task", error);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.categoryText}>{item?.type}</Text>
          <Text style={styles.taskName}>{item?.title}</Text>
        </View>
        <ActionsDropdown onDelete={deleteTask} task={item} />
      </View>
      <View style={{ flexDirection: "row", gap: 3, marginTop: 10 }}>
        <MaterialCommunityIcons
          name="calendar-month-outline"
          size={16}
          color={colors.primary}
        />
        <Text style={styles.date}>
          {new Date(item?.createdAt).toDateString()}
        </Text>
      </View>
      <View
        style={[
          styles.tagWrapper,
          { backgroundColor: periorityColors[item.periority] },
        ]}
      >
        <Text style={styles.periorityText}>{item?.periority}</Text>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 11,
    padding: 14,
    marginBottom: 15,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 12,
    fontFamily: fonts.PoppinsMedium,
    color: colors.primary,
  },
  taskName: {
    fontSize: 16,
    fontFamily: fonts.PoppinsMedium,
    color: colors.text,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: "#6E6E6E",
  },
  tagWrapper: {
    backgroundColor: colors.primary,
    height: 26,
    borderRadius: 13,
    width: 80,
    marginLeft: "auto",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  periorityText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
  },
});
