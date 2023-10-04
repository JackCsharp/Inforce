import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UrlService from "../API/UrlService";
const RefRedirectionPage = () => {
  const [url, setUrl] = useState({});
  const { ref } = useParams();
  async function Redirection() {}
  async function fetchUrl() {
    const response = await UrlService.GetUrlByShort(ref);
    setUrl(response);
    window.location.href = `${response.longUrl}`;
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return <div>We redirecting you to {ref}</div>;
};
export default RefRedirectionPage;
