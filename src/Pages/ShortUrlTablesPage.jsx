import React, { useState, useEffect, useContext } from "react";
import UrlService from "../API/UrlService";
import { useNavigate } from "react-router-dom";
import ModalWindow from "../Components/ModalWindows/ModalWindow";
import { AuthContext } from "../context";
import UrlForm from "../Components/Forms/UrlForm";
import classes from "./Styles/Shared.module.css";
import specials from "./Styles/ShortUrlTablesPage.module.css";
const ShortUrlTablesPage = () => {
  const { autorizedUser } = useContext(AuthContext);
  const [urls, setUrls] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  async function fetchUrls() {
    const response = await UrlService.GetAll();
    setUrls(response);
  }
  useEffect(() => {
    fetchUrls();
  }, []);

  const addUrl = async (newUrl) => {
    const response = await UrlService.AddUrl(newUrl);
    if (response != null) {
      fetchUrls();
      setVisible(false);
    } else {
      alert("This short url already exist");
    }
  };
  async function deleteAllUrls() {
    await UrlService.DeleteAllUrls();
    fetchUrls();
  }
  return (
    <div>
      <ModalWindow isActive={visible} setIsActive={setVisible}>
        <UrlForm Add={addUrl}></UrlForm>
      </ModalWindow>
      {autorizedUser.userStatus === "Admin" && (
        <button className={classes.alertButton} onClick={() => deleteAllUrls()}>
          DELETE ALL
        </button>
      )}
      {autorizedUser.userStatus !== "Anonymous" && (
        <button
          className={classes.simpleButton}
          onClick={() => setVisible(true)}
        >
          Add new url
        </button>
      )}
      {urls.map((url) => (
        <div key={url.urlId}>
          <div className={specials.item}>
            <div className={specials.text}>
              localhost:3000/refs/{url.shortUrl} - {url.longUrl}
            </div>
            <div>
              <button
                className={classes.simpleButton}
                onClick={() => navigate(`/refs/${url.shortUrl}`)}
              >
                Open url
              </button>
              {autorizedUser.userStatus !== "Anonymous" && (
                <button
                  className={classes.simpleButton}
                  onClick={() => navigate(`/shorturlinfo/${url.urlId}`)}
                >
                  Details
                </button>
              )}
            </div>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};
export default ShortUrlTablesPage;
