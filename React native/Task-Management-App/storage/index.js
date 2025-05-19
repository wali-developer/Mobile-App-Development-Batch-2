import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    const result = await AsyncStorage.setItem(
      key,
      stringValue,
      (error, result) => {
        console.log({ result });
        console.log({ error });
      }
    );
    console.log(result);
  } catch (error) {
    console.log("Error stroing data in storage: ", error);
  }
};

export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data !== null ? JSON.parse(data) : null;
  } catch (error) {
    console.log("Error getting storage data: ", error);
  }
};

export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleting data: ", error);
  }
};

export const updateData = async (key, value) => {
  try {
    const existData = getData(key);
    if (existData !== null) {
      deleteData(key);
      storeData(key, value);
    }
  } catch (error) {
    console.log("Error updating data: ", error);
  }
};
