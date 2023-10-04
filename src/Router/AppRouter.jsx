import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { privateroutes, publicroutes } from "./routes";
import classes from "./AppRouter.module.css";
import { AuthContext } from "../context";
import { useState } from "react";
const AppRouter = () => {
  const [autorizedUser, setAutorizedUser] = useState({
    userStatus: "Anonymous",
  });

  return (
    <div>
      <AuthContext.Provider value={{ autorizedUser, setAutorizedUser }}>
        <BrowserRouter>
          {autorizedUser.userStatus !== "Anonymous" ? (
            <div className={classes.nav}>
              <Link to={"shorturltables"}>
                <button>Table</button>
              </Link>
              <Link to={"about"}>
                <button>About</button>
              </Link>
              <Link>
                <button
                  onClick={() => setAutorizedUser({ userStatus: "Anonymous" })}
                >
                  Exit
                </button>
              </Link>
            </div>
          ) : (
            <div className={classes.nav}>
              <Link to={"login"}>
                <button>Autorization</button>
              </Link>
              <Link to={"shorturltables"}>
                <button>Table</button>
              </Link>
              <Link to={"about"}>
                <button>About</button>
              </Link>
            </div>
          )}
          {autorizedUser.userStatus !== "Anonymous" ? (
            <Routes>
              {privateroutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
                />
              ))}
            </Routes>
          ) : (
            <Routes>
              {publicroutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
                />
              ))}
            </Routes>
          )}
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};
export default AppRouter;
