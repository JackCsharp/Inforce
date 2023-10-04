import axios from "axios";
export default class UrlService {
  static async GetAll(user) {
    try {
      const response = await axios.get("https://localhost:7141/api/Url");
      return response.data;
    } catch (e) {
      return null;
    }
  }
  static async GetUrl(id) {
    try {
      const response = await axios.get(`https://localhost:7141/api/Url/${id}`);
      return response.data;
    } catch {
      return null;
    }
  }
  static async AddUrl(url) {
    try {
      const response = await axios.post("https://localhost:7141/api/Url", url);
      return response;
    } catch {
      return null;
    }
  }
  static async GetUrlByShort(shortUrl) {
    try {
      const response = await axios.get(
        `https://localhost:7141/api/Url/byShort?shortUrl=${shortUrl}`,
        shortUrl
      );
      return response.data;
    } catch {
      return null;
    }
  }
  static async DeleteUrl(id) {
    try {
      await axios.delete(`https://localhost:7141/api/Url?id=${id}`);
      return true;
    } catch {
      return false;
    }
  }
  static async DeleteAllUrls() {
    try {
      await axios.delete(`https://localhost:7141/api/Url/DeleteAll`);
      return true;
    } catch {
      return false;
    }
  }
}
