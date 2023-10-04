import { useContext, useState } from "react";
import { AuthContext } from "../../context";

const UrlForm = ({ Add }) => {
  const { autorizedUser } = useContext(AuthContext);
  const [url, setUrl] = useState({
    userId: autorizedUser.userId,
    longUrl: "",
    shortUrl: "",
    date: new Date().toString(),
  });
  function Update(e) {
    e.preventDefault();
    Add(url);
  }

  return (
    <form>
      <input
        placeholder="Short"
        value={url.shortUrl}
        onChange={(e) => setUrl({ ...url, shortUrl: e.target.value })}
        style={{ display: "block" }}
      />
      <input
        placeholder="Long"
        value={url.longUrl}
        onChange={(e) => setUrl({ ...url, longUrl: e.target.value })}
        style={{ display: "block" }}
      />
      <button onClick={Update}>Create</button>
    </form>
  );
};
export default UrlForm;
