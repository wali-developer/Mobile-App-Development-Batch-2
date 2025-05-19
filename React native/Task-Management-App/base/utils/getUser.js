import { getData } from "../../storage";

export const getUser = async () => {
  const exist = localStorage.getItem("user");
  if (exist) {
    return exist;
  }

  return await getData("user");
};
