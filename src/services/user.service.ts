import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

class UserService {
  getTest() {
    return axios.get(API_URL + "/test");
  }

  getCurrentRooms() {
    // @ts-ignore
    return axios.get(API_URL + "room", { headers: authHeader() });
  }

  getModeratorBoard() {
    // @ts-ignore
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    // @ts-ignore
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();