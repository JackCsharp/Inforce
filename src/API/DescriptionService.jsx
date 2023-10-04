import axios from "axios";
export default class DescriptionService {
  static async getDescription() {
    try {
      const response = await axios.get(
        `https://localhost:7141/api/Description`
      );
      return response.data;
    } catch {
      return null;
    }
  }
  static async updateDescription(description) {
    try {
      axios.put(`https://localhost:7141/api/Description`, description);
      return true;
    } catch {
      return false;
    }
  }
}
