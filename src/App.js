import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
function App() {
  return (
    <div>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
