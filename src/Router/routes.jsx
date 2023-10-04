import LoginPage from "../Pages/LoginPage";
import ShortUrlTablesPage from "../Pages/ShortUrlTablesPage";
import ShortUrlInfoPage from "../Pages/ShortUrlInfoPage";
import AboutPage from "../Pages/AboutPage";
import RefRedirectionPage from "../Pages/RefRedirectionPage";

export const privateroutes = [
  { path: "/shorturlinfo/:id", element: <ShortUrlInfoPage />, exact: true },
  { path: "/shorturltables", element: <ShortUrlTablesPage />, exact: true },
  { path: "/about", element: <AboutPage />, exact: true },
  { path: "/refs/:ref", element: <RefRedirectionPage />, exact: true },
];
export const publicroutes = [
  { path: "shorturltables", element: <ShortUrlTablesPage />, exact: true },
  { path: "/login", element: <LoginPage />, exact: true },
  { path: "*", element: <LoginPage />, exact: true },
  { path: "/refs/:ref", element: <RefRedirectionPage />, exact: true },
  { path: "/about", element: <AboutPage />, exact: true },
];
