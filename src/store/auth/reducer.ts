import auth from "./auth";
import message from "./message";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  auth,
  message,
});
