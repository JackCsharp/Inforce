import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UrlService from "../API/UrlService";
import UserService from "../API/UserService";
import { AuthContext } from "../context";
import ModalWindow from "../Components/ModalWindows/ModalWindow";

const ShortUrlTablesInfo = () => {
  const { autorizedUser } = useContext(AuthContext);
  const { id } = useParams();
  const [url, setUrl] = useState({});
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  async function fetchUrl() {
    const response = await UrlService.GetUrl(id);
    const user = await UserService.GetUser(response.userId);
    setUser(user);
    setUrl(response);
  }
  useEffect(() => {
    fetchUrl();
  }, []);

  async function deleteUrl() {
    const response = await UrlService.DeleteUrl(url.urlId);
    if (response != false) navigate(`/shorturltables`);
  }
  return (
    <div>
      <ModalWindow isActive={visible} setIsActive={setVisible}>
        <h2>Are you sure?</h2>
        <button onClick={() => deleteUrl()}>Yes</button>
        <button onClick={() => setVisible(false)}>No</button>
      </ModalWindow>
      <div>short url - {url.shortUrl}</div>
      <div>{url.longUrl}</div>
      <div>Date of creation - {url.date}</div>
      <div>Creator - {user.username}</div>
      {(user.userId === autorizedUser.userId ||
        autorizedUser.userStatus == "Admin") && (
        <button onClick={() => setVisible(true)}>Delete</button>
      )}
    </div>
  );
};
export default ShortUrlTablesInfo;
