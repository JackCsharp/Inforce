import { useContext, useEffect, useState } from "react";
import DescriptionService from "../API/DescriptionService";
import { AuthContext } from "../context";
import classes from "./Styles/Shared.module.css";
const AboutPage = () => {
  const { autorizedUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState({ text: "" });
  async function fetchText() {
    const response = await DescriptionService.getDescription();
    setDescription({ ...description, text: response.text });
  }
  useEffect(() => {
    fetchText();
  }, []);
  async function updateDescription() {
    await DescriptionService.updateDescription(description);
    setIsEditing(false);
  }
  function cancelEditing() {
    setIsEditing(false);
    fetchText();
  }
  return (
    <div>
      {!isEditing && (
        <div>
          <div>{description.text}</div>
          {autorizedUser.userStatus === "Admin" && (
            <button
              className={classes.simpleButton}
              onClick={() => setIsEditing(true)}
            >
              Edit!
            </button>
          )}
        </div>
      )}
      {isEditing && (
        <div>
          <textarea
            value={description.text}
            onChange={(e) =>
              setDescription({ ...description, text: e.target.value })
            }
          ></textarea>
          <button
            className={classes.alertButton}
            onClick={() => cancelEditing()}
          >
            Cancel
          </button>
          <button
            className={classes.simpleButton}
            onClick={() => updateDescription()}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};
export default AboutPage;
