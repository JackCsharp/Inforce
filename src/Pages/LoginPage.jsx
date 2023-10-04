import { useContext, useState } from "react";
import UserService from "../API/UserService";
import { AuthContext } from "../context";
import { Navigate, useNavigate } from "react-router-dom";
import classes from "./Styles/Shared.module.css";
const LoginPage = () => {
  const [currentTable, setCurrentTable] = useState("Login");
  const { autorizedUser, setAutorizedUser } = useContext(AuthContext);
  const [user, setUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  async function Login(e) {
    e.preventDefault();
    const response = await UserService.Login(user);
    if (response != null) {
      setAutorizedUser({
        userStatus: response.status,
        userId: response.userId,
      });
      navigate("/shorturltables");
    }
  }
  async function Register(e) {
    e.preventDefault();
    if (user.username.length < 4 || user.password.length < 4) {
      setErrors(["Login and password must be an least 4 characters"]);
    } else {
      const response = await UserService.Register(user);
      if (response != null) {
        setAutorizedUser({
          userStatus: response.status,
          userId: response.userId,
        });
        navigate("/shorturltables");
      } else {
        setErrors(["User already exist"]);
      }
    }
  }
  return (
    <div>
      <button
        className={classes.simpleButton}
        onClick={() => setCurrentTable("Register")}
      >
        Registration
      </button>
      <button
        className={classes.simpleButton}
        onClick={() => setCurrentTable("Login")}
      >
        Login
      </button>
      {errors && errors.map((error, index) => <div key={index}>{error}</div>)}
      {currentTable === "Login" && (
        <form>
          <h2>Login</h2>
          <input
            className={classes.simpleInput}
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
          />
          <input
            className={classes.simpleInput}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          <button className={classes.simpleButton} onClick={(e) => Login(e)}>
            Log In
          </button>
        </form>
      )}
      {currentTable === "Register" && (
        <form>
          <h2>Registration</h2>

          <input
            className={classes.simpleInput}
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
          />
          <input
            className={classes.simpleInput}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          <button className={classes.simpleButton} onClick={(e) => Register(e)}>
            Register
          </button>
        </form>
      )}
    </div>
  );
};
export default LoginPage;
