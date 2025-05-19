import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fonts } from "../base/constants";
import TextField from "../components/common/TextField";
import { colors } from "../base/colors";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { axiosInstanace } from "../base/utils/axios";

const AddTaskPage = () => {
  const task = useLocalSearchParams();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    type: "",
    periority: "",
  });

  useEffect(() => {
    setTaskData({
      title: task?.title ?? "",
      type: task?.type ?? "",
      periority: task?.periority ?? "",
    });
  }, []);

  const handleChange = (field, value) => {
    setTaskData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async () => {
    if (!taskData.title || !taskData.type || !taskData.periority) {
      setError("All fields must be provided to add a task!");
      return;
    }

    setError(null);
    try {
      setIsLoading(true);
      if (task) {
        const { data } = await axiosInstanace.put(
          `/api/todo/update/${task?._id}`,
          taskData
        );
        alert("Task has been Updated in your tasks list!");
      } else {
        const { data } = await axiosInstanace.post("/api/todo/add", taskData);
        alert("Task has been added to your tasks list!");
      }

      setTaskData({
        title: "",
        type: "",
        periority: "",
      });

      router.push("/tasks");
    } catch (error) {
      console.log("Add task Error: ", error);
      if (error?.response?.data?.error) {
        setError(error?.response?.data?.error);
      } else if (error?.message) {
        setError("Request failed, please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Link href={"tasks"}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.heading}>{task ? "Update" : "Add"} task</Text>
      </View>
      <View style={{ gap: 20 }}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TextField
          label={"Title"}
          placeholder={"Enter your task title"}
          value={taskData.title}
          onChangeText={(value) => handleChange("title", value)}
        />
        <TextField
          label={"Type / Category"}
          placeholder={"Task type type e.g (Design, Development)"}
          value={taskData.type}
          onChangeText={(value) => handleChange("type", value)}
        />
        <TextField
          label={"Periority"}
          placeholder={"Task periority e.g (high, low, medium)"}
          value={taskData.periority}
          onChangeText={(value) => handleChange("periority", value)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size={"small"} color={colors.white} />
          ) : (
            <Text style={styles.buttonText}>{task ? "Update" : "Add"}</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.noAccountText}>
          Go back to{" "}
          <Link href={"/tasks"}>
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              Tasks
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default AddTaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingBottom: 60,
    // alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    width: 39,
    height: 39,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.PoppinsSemibold,
    textAlign: "center",
    paddingVertical: 20,
    flexGrow: 1,
    paddingRight: 60,
  },
  textsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgot: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: colors.primary,
  },
  button: {
    height: 44,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: "white",
  },
  noAccountText: {
    fontSize: 13,
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
    textAlign: "center",
    marginTop: 40,
  },
  errorText: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
  },
});
