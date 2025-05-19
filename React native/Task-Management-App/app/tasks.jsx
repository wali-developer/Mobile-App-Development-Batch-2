import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../base/colors";
import Header from "../components/tasks/Header";
import Search from "../components/tasks/Search";
import TasksTabs from "../components/tasks/TasksTabs";
import Task from "../components/tasks/Task";
import { Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { axiosInstanace } from "../base/utils/axios";
import { useDebounce } from "../base/hooks/useDebounce";

// const tabs = ["In Progress", "To Do", "Completed"];
const tabs = [
  {
    label: "In Progress",
    value: "inProgress",
  },
  {
    label: "To Do",
    value: "todo",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

const TasksPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(tabs[1]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 2000);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstanace.get(`/api/todo/list`, {
          params: { status: status?.value, search: debouncedSearch },
        });
        setData(data?.body);
      } catch (error) {
        console.log("Error fetching tasks list from server: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    getTasks();
  }, [status?.value, debouncedSearch, isRefresh]);

  return (
    <View style={styles.container}>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <TasksTabs active={status} setActive={setStatus} tabs={tabs} />
      <ScrollView contentContainerStyle={{ marginTop: 20, paddingBottom: 20 }}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={colors.primary} />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Task
                item={item}
                refreshData={() => setIsRefresh((prev) => !prev)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </ScrollView>
      <Link
        href="/addTask"
        style={{
          position: "absolute",
          bottom: 0,
          right: 15,
        }}
      >
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => router.push("/addTask")}
        >
          <Feather name="plus" size={27} color={colors.white} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default TasksPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    paddingTop: 15,
  },
  plusButton: {
    width: 53,
    height: 53,
    backgroundColor: colors.primary,
    borderRadius: 53,

    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: colors.black,
  },
});
