import axios from "axios";
export default class UserService {
  static async Register(user) {
    try {
      const response = await axios.post(
        "https://localhost:7141/User/Register",
        user
      );
      return response.data;
    } catch (e) {
      return null;
    }
  }
  static async Login(user) {
    try {
      const response = await axios.post(
        "https://localhost:7141/User/Login",
        user
      );
      return response.data;
    } catch {
      return null;
    }
  }
  static async GetUser(id) {
    try {
      const response = await axios.get(`https://localhost:7141/User/${id}`);
      return response.data;
    } catch {
      return null;
    }
  }
}
