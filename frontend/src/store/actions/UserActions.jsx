import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";

export const asyncloginuser = (user) => async () => {
  try {
    const email = user.email.trim();
    const password = user.password.trim();

    const { data } = await axios.get("/users");

    const foundUser = data.find(
      (u) => u.email === email && u.password === password,
    );

    if (!foundUser) {
      console.log("❌ User Not Found");
    } else {
      console.log("✅ Login Success", foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
    }
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser())
    console.log("User logout")
  } catch (error) {
    console.log(error);
  }
};
export const asynccurrentuser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else {
      console.log("User not found !");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

//
