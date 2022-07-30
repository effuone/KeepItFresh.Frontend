import axios from "axios";
const API_URL = "http://localhost:8080/api/";
class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(name:string, surname:string, age: number, email: string, password: string) {
    return axios.post(API_URL + "register", {
      name,
      surname,
      age,
      email,
      password,
    });
  }
}
export default new AuthService();